
import { NextRequest, NextResponse } from "next/server";
import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

export const runtime = "nodejs";

const SPARRC_ENQUIRY_API_URL =
  "https://api.ayatiworks.com/api/v1/public/sparrc/enquiry_details/records";

/*
  Existing SPARRC API key.
  Keep your current key here unchanged.
*/
const SPARRC_API_KEY =
  "8d4fa4263bf728f7954a18bee92f535b48e4b20d10bf9039bdcf589bf05b33c5";

/*
  CAPTCHA signing secret.

  No environment file is required.
  Replace this placeholder with a separate,
  randomly generated private secret of at
  least 32 characters before deployment.

  Do not reuse the SPARRC API key.
*/
const CAPTCHA_SECRET =
  "REPLACE_WITH_A_PRIVATE_RANDOM_SECRET_AT_LEAST_32_CHARACTERS";

const CAPTCHA_EXPIRY_MS = 5 * 60 * 1000;

const CAPTCHA_CHARACTERS =
  "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

type ContactEnquiryBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  captchaAnswer?: unknown;
  captchaToken?: unknown;
};

function getStringValue(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function errorResponse(
  message: string,
  status = 400
) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status }
  );
}

// ==========================================
// CAPTCHA GENERATION
// ==========================================

function generateCaptcha(): string {
  const bytes = randomBytes(5);

  return Array.from(bytes, (byte) => {
    return CAPTCHA_CHARACTERS[
      byte % CAPTCHA_CHARACTERS.length
    ];
  }).join("");
}

// ==========================================
// CAPTCHA SIGNATURE
// ==========================================

function signCaptcha(payload: string): string {
  return createHmac("sha256", CAPTCHA_SECRET)
    .update(payload)
    .digest("hex");
}

// ==========================================
// CREATE CAPTCHA TOKEN
// ==========================================

function createCaptchaToken(
  captchaText: string
): string {
  const expiresAt =
    Date.now() + CAPTCHA_EXPIRY_MS;

  const nonce = randomBytes(16).toString("hex");

  const payload = [
    captchaText,
    expiresAt,
    nonce,
  ].join(":");

  const signature = signCaptcha(payload);

  return Buffer.from(
    JSON.stringify({
      payload,
      signature,
    })
  ).toString("base64url");
}

// ==========================================
// VERIFY CAPTCHA
// ==========================================

function verifyCaptcha(
  token: string,
  answer: string
): boolean {
  try {
    if (
      !token ||
      !answer ||
      token.length > 2048
    ) {
      return false;
    }

    const decoded = JSON.parse(
      Buffer.from(
        token,
        "base64url"
      ).toString("utf8")
    );

    if (
      !decoded ||
      typeof decoded.payload !== "string" ||
      typeof decoded.signature !== "string"
    ) {
      return false;
    }

    const expectedSignature = signCaptcha(
      decoded.payload
    );

    const actualSignature = Buffer.from(
      decoded.signature,
      "hex"
    );

    const expectedSignatureBuffer = Buffer.from(
      expectedSignature,
      "hex"
    );

    if (
      actualSignature.length !==
      expectedSignatureBuffer.length
    ) {
      return false;
    }

    if (
      !timingSafeEqual(
        actualSignature,
        expectedSignatureBuffer
      )
    ) {
      return false;
    }

    const parts = decoded.payload.split(":");

    if (parts.length !== 3) {
      return false;
    }

    const [correctAnswer, expiryString] =
      parts;

    const expiry = Number(expiryString);

    if (
      !Number.isSafeInteger(expiry) ||
      Date.now() > expiry ||
      expiry > Date.now() + CAPTCHA_EXPIRY_MS
    ) {
      return false;
    }

    return (
      correctAnswer.toUpperCase() ===
      answer.trim().toUpperCase()
    );
  } catch {
    return false;
  }
}

// ==========================================
// GENERATE CAPTCHA SVG IMAGE
// ==========================================

function generateCaptchaImage(
  captchaText: string
): string {
  const letters = captchaText
    .split("")
    .map((character, index) => {
      const x = 10 + index * 18;
      const y = 30 + (index % 2 === 0 ? 0 : 2);
      const rotate = index % 2 === 0 ? -5 : 5;

      return `
        <text
          x="${x}"
          y="${y}"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="600"
          fill="#25252c"
          transform="rotate(${rotate} ${x} ${y})"
        >${character}</text>
      `;
    })
    .join("");

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="43"
      viewBox="0 0 105 43"
    >
      <rect
        width="105"
        height="43"
        rx="6"
        fill="#f7f8fa"
      />
      ${letters}
    </svg>
  `;

  return (
    "data:image/svg+xml;base64," +
    Buffer.from(svg).toString("base64")
  );
}

// ==========================================
// GET - GENERATE / REFRESH CAPTCHA
// ==========================================

export async function GET() {
  try {
    const captchaText = generateCaptcha();

    const captchaToken = createCaptchaToken(
      captchaText
    );

    const captchaImage = generateCaptchaImage(
      captchaText
    );

    return NextResponse.json(
      {
        success: true,
        captchaImage,
        captchaToken,
        expiresIn: 300,
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error(
      "CAPTCHA generation error:",
      error
    );

    return errorResponse(
      "Unable to generate CAPTCHA. Please refresh.",
      500
    );
  }
}

// ==========================================
// POST - SUBMIT SPARRC ENQUIRY
// ==========================================

export async function POST(
  request: NextRequest
) {
  try {
    let body: ContactEnquiryBody;

    try {
      body =
        (await request.json()) as ContactEnquiryBody;
    } catch {
      return errorResponse(
        "Invalid request body."
      );
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return errorResponse(
        "Invalid request body."
      );
    }

    const name = getStringValue(body.name);
    const email = getStringValue(body.email);
    const phone = getStringValue(body.phone);
    const message = getStringValue(body.message);

    const captchaAnswer = getStringValue(
      body.captchaAnswer
    );

    const captchaToken = getStringValue(
      body.captchaToken
    );

    // ======================================
    // REQUIRED FIELD VALIDATION
    // ======================================

    if (
      !name ||
      !email ||
      !phone ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, email, phone number and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // EMAIL VALIDATION
    // ======================================

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // PHONE VALIDATION
    // ======================================

    const phoneDigits =
      phone.replace(/\D/g, "");

    if (
      phoneDigits.length < 10 ||
      phoneDigits.length > 15
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide a valid phone number.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // CAPTCHA REQUIRED VALIDATION
    // ======================================

    if (!captchaAnswer || !captchaToken) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter the CAPTCHA code.",
        },
        {
          status: 400,
        }
      );
    }

    if (captchaAnswer.length !== 5) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter the complete 5-character CAPTCHA.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // SERVER-SIDE CAPTCHA VERIFICATION
    // ======================================

    const isCaptchaValid = verifyCaptcha(
      captchaToken,
      captchaAnswer
    );

    if (!isCaptchaValid) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid or expired CAPTCHA. Please refresh and try again.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // ORIGINAL SPARRC API REQUEST
    // ======================================

    const apiResponse = await fetch(
      SPARRC_ENQUIRY_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": SPARRC_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: {
            name,
            email,
            phone_number: phone,
            message,
          },
        }),
        cache: "no-store",
      }
    );

    const responseText =
      await apiResponse.text();

    let apiData: unknown = null;

    try {
      apiData = responseText
        ? JSON.parse(responseText)
        : null;
    } catch {
      apiData = responseText;
    }

    // ======================================
    // API ERROR HANDLING
    // ======================================

    if (!apiResponse.ok) {
      console.error(
        "SPARRC enquiry API error:",
        {
          status: apiResponse.status,
          response: apiData,
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            getApiErrorMessage(apiData) ||
            "Unable to submit the enquiry. Please try again.",
        },
        {
          status: apiResponse.status,
        }
      );
    }

    // ======================================
    // SUCCESS RESPONSE
    // ======================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully.",
        data: apiData,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact enquiry route error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "The server could not process your request. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

// ==========================================
// ORIGINAL API ERROR MESSAGE HANDLER
// ==========================================

function getApiErrorMessage(
  data: unknown
): string | null {
  if (
    typeof data === "object" &&
    data !== null
  ) {
    const record = data as Record<
      string,
      unknown
    >;

    const possibleMessage =
      record.message ??
      record.detail ??
      record.error;

    if (
      typeof possibleMessage === "string"
    ) {
      return possibleMessage;
    }

    if (
      Array.isArray(possibleMessage)
    ) {
      return possibleMessage
        .map((item) => {
          if (typeof item === "string") {
            return item;
          }

          if (
            typeof item === "object" &&
            item !== null &&
            "msg" in item
          ) {
            const message = (
              item as {
                msg?: unknown;
              }
            ).msg;

            return typeof message === "string"
              ? message
              : "";
          }

          return "";
        })
        .filter(Boolean)
        .join(", ");
    }
  }

  return null;
}
