
"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  RefreshCw,
  X,
} from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ToastState = {
  type: "success" | "error";
  title: string;
  message: string;
} | null;

type CaptchaResponse = {
  success: boolean;
  captchaImage?: string;
  captchaToken?: string;
  message?: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.031353120536!2d80.2529045!3d13.033675400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266360d32a0f9%3A0xbc4bfd812341d6d8!2sSparrc%20Institute%20Alwarpet!5e0!3m2!1sen!2sin";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ConnectWithUs() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [toast, setToast] =
    useState<ToastState>(null);

  // CAPTCHA states
  const [captchaInput, setCaptchaInput] =
    useState("");

  const [captchaImage, setCaptchaImage] =
    useState("");

  const [captchaToken, setCaptchaToken] =
    useState("");

  const [isCaptchaLoading, setIsCaptchaLoading] =
    useState(true);

  // Load or refresh CAPTCHA
  const loadCaptcha = useCallback(async () => {
    setIsCaptchaLoading(true);
    setCaptchaInput("");
    setCaptchaImage("");
    setCaptchaToken("");

    try {
      const response = await fetch(
        "/api/contact-enquiry",
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const result: CaptchaResponse =
        await response.json();

      if (
        !response.ok ||
        !result.success ||
        !result.captchaImage ||
        !result.captchaToken
      ) {
        throw new Error(
          result.message ||
            "Unable to load CAPTCHA."
        );
      }

      setCaptchaImage(result.captchaImage);
      setCaptchaToken(result.captchaToken);
    } catch (error) {
      setToast({
        type: "error",
        title: "CAPTCHA Error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to load CAPTCHA.",
      });
    } finally {
      setIsCaptchaLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadCaptcha();
  }, [loadCaptcha]);

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => {
      setToast(null);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toast]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validateForm = (): string | null => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) {
      return "Please enter your name.";
    }

    if (!email) {
      return "Please enter your email address.";
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!phone) {
      return "Please enter your phone number.";
    }

    const phoneDigits =
      phone.replace(/\D/g, "");

    if (
      phoneDigits.length < 10 ||
      phoneDigits.length > 15
    ) {
      return "Please enter a valid phone number.";
    }

    if (!message) {
      return "Please enter your message.";
    }

    // CAPTCHA validation
    if (!captchaToken || !captchaImage) {
      return "Please refresh the CAPTCHA.";
    }

    if (!captchaInput.trim()) {
      return "Please enter the CAPTCHA code.";
    }

    if (captchaInput.trim().length !== 5) {
      return "Please enter the complete 5-character CAPTCHA.";
    }

    return null;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    const validationError = validateForm();

    if (validationError) {
      setToast({
        type: "error",
        title: "Check your details",
        message: validationError,
      });

      return;
    }

    try {
      setIsSubmitting(true);
      setToast(null);

      const response = await fetch(
        "/api/contact-enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            message: formData.message.trim(),
            captchaAnswer: captchaInput.trim(),
            captchaToken,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : "Unable to submit the enquiry."
        );
      }

      setFormData(initialFormData);

      setToast({
        type: "success",
        title: "Enquiry submitted",
        message:
          "Thank you for contacting SPARRC. Our team will contact you shortly.",
      });
    } catch (error) {
      setToast({
        type: "error",
        title: "Submission failed",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      void loadCaptcha();
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6f3ff] blur-[90px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          className="relative mx-auto w-full max-w-[1030px] overflow-hidden rounded-[18px] border border-[#f1eff5] bg-white p-3 shadow-[0_14px_45px_rgba(36,27,68,0.10)] sm:p-4"
        >
          <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr] md:items-stretch">
            <motion.div
              variants={itemVariants}
              className="flex flex-col px-2 py-1 sm:px-3 sm:py-2"
            >
              <motion.h2
                variants={itemVariants}
                className="font-jost text-[22px] font-semibold leading-tight tracking-[-0.025em] text-[#15131a] sm:text-[24px]"
              >
                Connect With Us
              </motion.h2>

              <form
                onSubmit={handleSubmit}
                className="mt-2.5"
                noValidate
              >
                <motion.div variants={itemVariants}>
                  <FormField
                    id="contact-name"
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    id="contact-email"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    id="contact-phone"
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="group border-b border-[#eeecf1] py-2 transition-colors duration-300 focus-within:border-[#5f36f2]"
                >
                  <label
                    htmlFor="contact-message"
                    className="block text-[12px] font-semibold leading-none text-[#17151b] sm:text-[13px]"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    rows={1}
                    disabled={isSubmitting}
                    className="mt-1.5 min-h-[32px] w-full resize-none bg-transparent text-[16px] leading-5 text-[#242128] outline-none placeholder:text-[9px] placeholder:font-medium placeholder:tracking-[0.14em] placeholder:text-[#bbb6c1] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </motion.div>

                {/* CAPTCHA */}
                <motion.div
                  variants={itemVariants}
                  className="mt-4"
                >
                  <label
                    htmlFor="contact-captcha"
                    className="mb-2 block text-[12px] font-semibold text-[#17151b] sm:text-[13px]"
                  >
                    Captcha
                  </label>

                  <div className="flex items-center gap-2">
                    <input
                      id="contact-captcha"
                      type="text"
                      value={captchaInput}
                      onChange={(event) => {
                        const value = event.target.value
                          .replace(/[^a-zA-Z0-9]/g, "")
                          .toUpperCase()
                          .slice(0, 5);

                        setCaptchaInput(value);
                      }}
                      placeholder="Enter Your Captcha"
                      maxLength={5}
                      autoComplete="off"
                      spellCheck={false}
                      disabled={isSubmitting}
                      className="h-[43px] min-w-0 flex-1 rounded-[8px] border border-[#e3e0e9] bg-white px-3 text-[13px] font-medium text-[#242128] outline-none transition-all duration-300 placeholder:text-[11px] placeholder:text-[#aaa5b1] focus:border-[#6238ff] focus:ring-2 focus:ring-[#6238ff]/10 disabled:opacity-60"
                    />

                    <div className="flex h-[43px] w-[90px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#e3e0e9] bg-[#f7f8fa]">
                      {isCaptchaLoading ? (
                        <LoaderCircle
                          size={18}
                          className="animate-spin text-[#6238ff]"
                        />
                      ) : captchaImage ? (
                        <img
                          src={captchaImage}
                          alt="CAPTCHA verification code"
                          className="h-full w-full object-contain"
                          draggable={false}
                        />
                      ) : (
                        <span className="text-[10px] text-[#999]">
                          Unavailable
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => void loadCaptcha()}
                      disabled={
                        isCaptchaLoading || isSubmitting
                      }
                      aria-label="Refresh CAPTCHA"
                      title="Refresh CAPTCHA"
                      className="flex h-[43px] w-[30px] shrink-0 items-center justify-center rounded-[8px] text-[#343039] transition-all duration-300 hover:bg-[#f4f1ff] hover:text-[#6238ff] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <RefreshCw
                        size={18}
                        className={
                          isCaptchaLoading
                            ? "animate-spin"
                            : ""
                        }
                      />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-4"
                >
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      isCaptchaLoading ||
                      !captchaToken
                    }
                    className="inline-flex min-h-[38px] min-w-[112px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#6238ff_0%,#4820f2_100%)] px-6 text-[10px] font-semibold tracking-[0.18em] text-white shadow-[0_8px_20px_rgba(82,44,239,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_11px_24px_rgba(82,44,239,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle
                          size={14}
                          className="mr-2 animate-spin"
                        />
                        Sending
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-[260px] overflow-hidden rounded-[14px] bg-[#f3f3f3] sm:h-[300px] md:h-auto md:min-h-[310px]"
            >
              <iframe
                src={mapEmbedUrl}
                title="SPARRC Institute Alwarpet location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />

              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/[0.05]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  name: keyof ContactFormData;
  type: "text" | "email" | "tel";
  placeholder: string;
  value: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
  disabled?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

function FormField({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  autoComplete,
  inputMode,
  disabled,
  onChange,
}: FormFieldProps) {
  return (
    <div className="group border-b border-[#eeecf1] py-2 transition-colors duration-300 focus-within:border-[#5f36f2]">
      <label
        htmlFor={id}
        className="block text-[12px] font-semibold leading-none text-[#17151b] sm:text-[13px]"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        disabled={disabled}
        className="mt-1.5 h-[24px] w-full bg-transparent text-[16px] leading-none text-[#242128] outline-none placeholder:text-[9px] placeholder:font-medium placeholder:tracking-[0.14em] placeholder:text-[#bbb6c1] disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}

type ToastProps = {
  toast: ToastState;
  onClose: () => void;
};

function Toast({
  toast,
  onClose,
}: ToastProps) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 18,
            scale: 0.97,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed bottom-5 left-4 right-4 z-[9999] mx-auto max-w-[430px] sm:left-auto sm:right-6"
          role="status"
          aria-live="polite"
        >
          <div
            className={`relative overflow-hidden rounded-[16px] border bg-white p-4 shadow-[0_18px_55px_rgba(26,20,49,0.20)] ${
              toast.type === "success"
                ? "border-[#d8f0e3]"
                : "border-[#f4d8d8]"
            }`}
          >
            <div
              className={`absolute left-0 top-0 h-full w-[4px] ${
                toast.type === "success"
                  ? "bg-[#20a968]"
                  : "bg-[#e15353]"
              }`}
            />

            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  toast.type === "success"
                    ? "bg-[#ebfaf2] text-[#20a968]"
                    : "bg-[#fff0f0] text-[#e15353]"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <CircleAlert size={20} />
                )}
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[14px] font-semibold text-[#17141d]">
                  {toast.title}
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#6f6976]">
                  {toast.message}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#8c8792] transition-colors hover:bg-[#f5f3f7] hover:text-[#242028]"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
