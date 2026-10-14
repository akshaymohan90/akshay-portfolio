"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="section-contact flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-send" />
        Contact
      </div>
      <h4 className="s-title letter-space--2 split-text effect-blur-fade">
        If you have a general or project <br className="d-none d-lg-block" />
        enquiry, please drop me an email <br className="d-none d-lg-block" />
        or fill the form - available now
      </h4>
      <form className="form-contact" id="contactform" onSubmit={handleSubmit} noValidate>
        {submitted && (
          <div className="flat-alert msg-success" style={{ marginBottom: 16 }}>
            Thanks for reaching out! Akshay will get back to you shortly.
          </div>
        )}
        <div className="form-content effectFade fadeUp no-div">
          <fieldset className="field-ip">
            <input type="text" name="name" id="name" placeholder="Your Name *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="email" name="email" id="email" placeholder="Email Address *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="text" name="message" id="message" placeholder="Project Description or Inquiry" />
          </fieldset>
        </div>
        <div className="form-action effectFade fadeUp no-div">
          <div className="send-wrap">
            <button type="submit" className="tf-btn animate-btn animate-dark">
              <span className="text-body-3">Send Message</span>
            </button>
          </div>
          <div className="contact-info-links d-flex flex-column gap-1">
            <a href={`mailto:${profile.email}`} className="text-body-1 link letter-space--2 text-black-72">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="text-body-3 link text-black-56">
              {profile.phone} • {profile.location}
            </a>
            <a
              href="https://wa.me/919074106976?text=Hi%20Akshay%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-3 link d-inline-flex align-items-center gap-1 mt-1"
              style={{ color: "#25D366", fontWeight: 500 }}
              title="Chat directly on WhatsApp"
            >
              <svg width="15" height="15" viewBox="0 0 24 24">
                <path
                  style={{ fill: "#25D366" }}
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
              </svg>
              <span>Chat on WhatsApp ({profile.phone})</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
