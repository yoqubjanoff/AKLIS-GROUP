import React from "react";
import lokatsiya from "../../assets/Icons/lokatsiya.png";
import phone from "../../assets/Icons/phone.png";
import email from "../../assets/Icons/email.png";
import telegram from "../../assets/Icons/telegram.png"
import facebook from "../../assets/Icons/facebook.png"
import twitter from "../../assets/Icons/twitter.png"
import instagram from "../../assets/Icons/instagram.png"
import linkedin from "../../assets/Icons/linkedin.png"
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import "./Footer.css";


const Footer = () => {
  const [lang] = useLocalization();
  return (
    <>
      <footer className="py-5">
        <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-md-4">
                <h3 className="mb-4 text-white">{languages[lang].footer.address.title}</h3>
                <address className="mt-1 text-white fw-bold">
                  <img src={phone} alt="" width="25px" className="me-2 mb-1" />
                  <a href="tel:+99894235100" className="mb-2 text-white">
                    <span className="fw-bold text-white"></span>
                    {languages[lang].footer.address.phone}
                  </a>
                  <div className="adres d-flex align-items-center">
                    <img
                      src={lokatsiya}
                      alt=""
                      width="25px"
                      className="me-2 mb-1"
                    />
                    <p className="mb-2 mt-2">
                      <span className="fw-bold text-white"></span>{languages[lang].footer.address.description}
                    </p>
                  </div>
                  <div className="email adres d-flex align-items-center">
                    <img
                      src={email}
                      alt=""
                      width="25px"
                      className="me-2 mb-1"
                    />
                    <p>{languages[lang].footer.address.email}</p>
                  </div>
                </address>
              </div>
              <div className="col-md-4">
                <h3 className="mb-4 text-white">{languages[lang].footer.links.title}</h3>
                <ul className="list-undestyled">
              <li className="nav-item">
                <a href="#" className="nav-link">
                {languages[lang].footer.links.link1}
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                {languages[lang].footer.links.link2}
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link">
                {languages[lang].footer.links.link3}
                </a>
              </li>
              <li className="nav-item">
                <a href="#contactus" className="nav-link">
                {languages[lang].footer.links.link4}
                </a>
              </li>
            </ul>
              </div>
              <div className="col-md-4">
                <h3 className="mb-4 text-white">Social media</h3>
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="#" className="text-white social me-3">
                      <img src={telegram} alt="" width="40px" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white social me-3">
                      <img src={facebook} alt="" width="40px" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white social me-3">
                      <img src={instagram} alt="" width="40px" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white social me-3">
                      <img src={facebook} alt="" width="40px" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white social me-3">
                      <img src={twitter} alt="" width="40px" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white social me-3">
                      <img src={linkedin} alt="" width="40px" />
                    </a>
                  </li>
                  </ul>
              </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
