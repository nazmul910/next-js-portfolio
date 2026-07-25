"use client";

import { useEffect, useState } from "react";
import { contactPageStyles as s } from "../../../public/dummyStyles";

import emailjs from "@emailjs/browser";
import { pre } from "motion/react-client";
import { Boxes } from "@/components/ui/background-boxes";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJS sercie or template ID not configured");
      }

      await emailjs.send(serviceId, templateId, templateParams);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocused(null);

      alert("Message sent - thank you!");
    } catch (error) {
      console.error("EmailJS error: ", error);
      alert("failed to sent message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getLabelClass = (fieldName: string) => {
    const baseClass = s.formLabelBase;
    const focusedClass =
      focused === fieldName || formData[fieldName as keyof typeof formData]
        ? s.formLabelFocused
        : s.formLabelUnfocused;

    return `${baseClass} ${focusedClass}`;
  };

  return (
    <>
      <div className={s.pageContainer}>
        <div className={s.contentContainer}>
          <div className={s.formOuterContainer}>
            <div className={s.backgroundOverlay} />
            <Boxes />
            <div className={s.headerContainer}>
              <h1 className={s.headerTitle}>Get in Touch</h1>
              <p className={s.headerSubtitle}>
                Have a project in mind or just want to say hi? I&apos;d love to
                hear from you
              </p>
            </div>
            <div className={s.contactMethodsGrid}>
              <a
                href="mailto:nazmulhasan677441@gmail.com"
                className={s.contactCard}
              >
               <div className="hidden md:block">
                 <div className={s.contactIconContainer}>
                  <svg
                    className={s.contactIcon }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
               </div>
                <div>
                  <p className={s.contactLabel}>Email</p>
                  <p className={s.contactValue}>nazmulhasan677441@gmail.com</p>
                </div>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={s.contactCard}
              >
                <div className="hidden md:block">
                  <div className={s.contactIconContainer}>
                  <svg
                    className={s.contactIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                </div>
                <div>
                  <p className={s.contactLabel}>Twitter</p>
                  <p className={s.contactValue}>@Nazmul</p>
                </div>
              </a>
            </div>
            <form onSubmit={handleSubmit} className={s.formContainer}>
              <div className={s.formGrid}>
                {/* Name Field */}
                <div className={s.formFieldContainer}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={s.formInput}
                    placeholder="John Doe"
                    required
                  />
                  <label htmlFor="name" className={getLabelClass("name")}>
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className={s.formFieldContainer}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={s.formInput}
                    placeholder="john@example.com"
                    required
                  />
                  <label htmlFor="email" className={getLabelClass("email")}>
                    Email
                  </label>
                </div>
              </div>

              {/* Subject Field */}
              <div className={s.formFieldContainer}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={s.formInput}
                  placeholder="Project Collaboration"
                  required
                />
                <label htmlFor="subject" className={getLabelClass("subject")}>
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className={s.formFieldContainer}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={6}
                  className={s.formTextarea}
                  placeholder="Tell me about your project..."
                  required
                />
                <label htmlFor="message" className={getLabelClass("message")}>
                  Message
                </label>
              </div>
              <div className={s.submitButtonContainer}>
                <button
                  type="submit"
                  className={s.submitButton}
                  disabled={sending}
                  aria-label={sending ? "Sending message" : "Send message"}
                  aria-busy={sending}
                >
                  <span className={s.submitButtonText}>
                    {sending ? "Sending..." : "Send Message"}

                    <svg
                      className={s.submitButtonIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <p className={s.alternativeText}>
            Prefer to schedule a call? {' '}
            <a href="#" className={s.alternativeLink}>+008 1316-197851</a>
          </p>
        </div>
      </div>
    </>
  );
}
