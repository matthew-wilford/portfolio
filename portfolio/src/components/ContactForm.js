import { useForm, ValidationError } from "@formspree/react";
import "../assets/styles/contact.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqeabqe");
  if (state.succeeded) {
    return <div className="msgConfirm">Message sent!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="row justify-content-center mb-2">
        <div class="col-10">
          <input
            type="name"
            name="name"
            class="form-control bg-success"
            placeholder="Name*"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
      </div>
      <div class="row justify-content-center mb-2">
        <div class="col-10">
          <input
            type="email"
            name="email"
            class="form-control bg-success"
            placeholder="Email*"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div class="row justify-content-center mb-2">
        <div class="col-10">
          <input
            type="subject"
            name="subject"
            class="form-control bg-success"
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
      <div class="row justify-content-center mb-2">
        <div class="col-10">
          <textarea
            type="message"
            name="message"
            class="form-control bg-success"
            placeholder="Message*"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div class="row justify-content-center mb-2">
        <div class="col-10">
          <button
            type="submit"
            name="submit"
            class="btn btn-danger rounded-pill"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
