import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import arrowRightTwo from "/assets/img/icon/arrow-right-two.png";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const SERVICE_ID = "service_1v419nq";
const TEMPLATE_ID = "template_q92b0h1";
const PUBLIC_KEY = "HEYc_eGmsWiomCr63";

const NewsletterV2 = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleForm: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    try {
      setSubmitting(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("Thanks for subscribing!");
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
      <form className="newsletter style-two" ref={formRef} onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Your Email"
          className="form-control"
          name="email"
          required
          autoComplete="off"
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "..." : <img src={arrowRightTwo} alt="Submit" />}
        </button>
      </form>
    </>
  );
};

export default NewsletterV2;
