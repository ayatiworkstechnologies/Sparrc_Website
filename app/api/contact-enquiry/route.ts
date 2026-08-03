import { NextRequest, NextResponse } from "next/server";

const SPARRC_ENQUIRY_API_URL =
  "https://api.ayatiworks.com/api/v1/public/sparrc/enquiry_details/records";

/*
  Add the actual API key directly here.

  Since you requested not to use an environment file,
  this key remains in the server-only route file and is
  never exposed to the browser.
*/
const SPARRC_API_KEY = "8d4fa4263bf728f7954a18bee92f535b48e4b20d10bf9039bdcf589bf05b33c5";

type ContactEnquiryBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function getStringValue(value: unknown) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export async function POST(
  request: NextRequest,
) {
  try {
    const body =
      (await request.json()) as ContactEnquiryBody;

    const name = getStringValue(body.name);
    const email = getStringValue(body.email);
    const phone = getStringValue(body.phone);
    const message = getStringValue(body.message);

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
        },
      );
    }

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
        },
      );
    }

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
        },
      );
    }

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
      },
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

    if (!apiResponse.ok) {
      console.error(
        "SPARRC enquiry API error:",
        {
          status: apiResponse.status,
          response: apiData,
        },
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
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully.",
        data: apiData,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Contact enquiry route error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "The server could not process your request. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}

function getApiErrorMessage(
  data: unknown,
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