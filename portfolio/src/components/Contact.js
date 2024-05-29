import "../assets/styles/contact.css";
import hShot from "../assets/images/headshot.jpg";
import ContactForm from "./ContactForm.js";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10 text-center text-secondary">
          <h1 className="cPageTitle">Let's Connect!</h1>
          <div className="row justify-content-center">
            <div className="col-10">
              <img
                className="img-fluid shadow hShot mb-3"
                src={hShot}
                alt="Professional head shot"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
