import "../assets/styles/contact.css";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import ContactForm from "./ContactForm.js";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="cRectangle col-md-8 text-center text-secondary shadow">
          <h1>Let's Connect!</h1>
          <div className="row justify-content-center mt-3">
            <div className="col-8 col-md-10">
              <div className="d-flex align-items-stretch">
                <div className="infoRectangle bg-success flex-column mx-2">
                  <EmailIcon className="cIcon" />
                  <div className="">matthew.wilford@outlook.com</div>
                  <PhoneIcon className="cIcon" />
                  <div>+1 610 304 3286</div>
                  <LocationIcon className="cIcon" />
                  <div>Philadelphia, PA</div>
                  <a
                    href="https://www.linkedin.com/in/matthew-wilford-33a431202/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className="cIcon pt-1" />
                  </a>
                </div>
                <div className="ml-3 flex-fill">
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
