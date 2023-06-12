import React, { useEffect } from "react";
import "./ContactUs.css";
import Aos from "aos";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";

const ContactUs = () => {
  const [lang] = useLocalization();

  useEffect(() => {
    Aos.init();
  }, []);
 
  return (
    <section id="contactus" className="py-5 my-5">
      <div className="container">
        <div className="wrapper">
          <h2
            className="text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {languages[lang].contactUs.contactUs_title.title}
          </h2>
        </div>
        <div
          className="d-flex  justify-content-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="contact-box me-4">
            <div className="contact-info">
              <h3 className="">{languages[lang].contactUs.contactUs_title.title_info.title}</h3>
                  <form
                    action="https://formsubmit.co/yoqubjanoff1@gmail.com"
                    method="POST"
                    className="mt-5"
                  >
                    <input
                      type="text"
                      placeholder={languages[lang].contactUs.contactUs_title.title_info.placeholderName}
                      className="form-control mb-3 shadow-sm"
                      name="name"
                    />
                    <input
                      type="email"
                      placeholder={languages[lang].contactUs.contactUs_title.title_info.placeholderEmail}
                      className="form-control mb-3 shadow-sm"
                      name="email"
                    />
                    <textarea
                      name="message"
                      placeholder={languages[lang].contactUs.contactUs_title.title_info.placeholderXabaringiz}
                      className="form-control mb-3 shadow-sm"
                    ></textarea>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                      {languages[lang].contactUs.contactUs_title.title_info.buttonTitle}
                      </button>
                    </div>
                  </form>
                  <div className="tel-box d-flex flex-column">
                  <a href="tel:+998942355100" className="mt-2 text-white fw-bold">{languages[lang].contactUs.contactUs_title.phones.title} +998942355100</a>
                  <a href="tel:+998942355100" className="mt-2 text-white fw-bold">{languages["uz"].contactUs.contactUs_title.phones.title} +998942355100</a>
                  <a href="tel:+998942355100" className="mt-2 text-white fw-bold">{languages["uz"].contactUs.contactUs_title.phones.title} +998942355100</a>
                  </div>
            </div>
          </div>
          <div
            className="rounded border-rounded"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <a
              href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Toshkent
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&mode=routes&rtext=41.363420%2C69.457578~41.414872%2C69.481267&rtt=auto&ruri=~&utm_medium=mapframe&utm_source=maps&z=12"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Yandex Xarita
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&mode=routes&rtext=41.363420%2C69.457578~41.414872%2C69.481267&rtt=auto&ruri=~&z=12"
              width="960"
              height="550"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
