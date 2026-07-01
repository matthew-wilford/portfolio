import "../assets/styles/contact.css";
import hShot from "../assets/images/headshot.jpg";
import ContactForm from "./ContactForm.js";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="section-shell p-4 p-lg-5 rounded-4 shadow-sm">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="contact-panel p-4 p-lg-5 rounded-4 shadow-sm">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div className="contact-copy text-center text-lg-start">
                    <span className="contact-pretitle text-secondary">
                      Say hello
                    </span>
                    <h1 className="cPageTitle display-1 pb-3">Let’s connect!</h1>
                    <p className="contact-intro text-dark">
                      Interested in working together or want to chat about your
                      next project? Send a message below and I’ll get back to you
                      soon.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="contact-image-wrapper mx-auto">
                    <img
                      src={hShot}
                      className="contact-image img-fluid"
                      alt="Headshot"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-12 col-lg-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
