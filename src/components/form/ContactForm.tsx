/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const SERVICE_ID = "service_1v419nq";
const TEMPLATE_ID = "template_yxwnlhh";
const PUBLIC_KEY = "HEYc_eGmsWiomCr63";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleForm: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    // Honeypot check (invisible field; real users won't fill it)
    const hp = (formRef.current.querySelector('input[name="company"]') as HTMLInputElement)?.value;
    if (hp) {
      // likely a bot, just bail "successfully"
      toast.success("Thanks For Your Email!");
      formRef.current.reset();
      return;
    }

    try {
      setSubmitting(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("Thanks For Your Email!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form className="contact-form contact-form" ref={formRef} onSubmit={handleForm}>
        {/* Honeypot field (hidden from users) */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
          aria-hidden="true"
        />

        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control" id="name" name="name" placeholder="Name*" type="text" required autoComplete="off" />
              <span className="alert-error" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete="off" />
              <span className="alert-error" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control no-arrows" id="phone" name="phone" placeholder="Phone*" type="tel" required autoComplete="off" />
              <span className="alert-error" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About You *" required autoComplete="off" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit" disabled={submitting}>
              <i className="fa fa-paper-plane" /> {submitting ? "Sending..." : "Get in Touch"}
            </button>
          </div>
        </div>

        {/* Alert Message */}
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
