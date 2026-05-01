import { useForm, ValidationError } from "@formspree/react";
import "../assets/styles/contact.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqeabqe");
  if (state.succeeded) {
    return <div className="msgConfirm">Message sent!</div>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="row justify-content-center mb-3">
        <div className="col-12">
          <input
            type="text"
            name="name"
            className="form-control contact-input"
            placeholder="Name*"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12">
          <input
            type="email"
            name="email"
            className="form-control contact-input"
            placeholder="Email*"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-12">
          <input
            type="text"
            name="subject"
            className="form-control contact-input"
            placeholder="Subject*"
            required
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <textarea
            name="message"
            className="form-control contact-input"
            placeholder="Message*"
            rows="6"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="row justify-content-center mb-2">
        <div className="col-12 d-grid">
          <button
            type="submit"
            name="submit"
            className="btn btn-secondary rounded-pill contact-btn"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
