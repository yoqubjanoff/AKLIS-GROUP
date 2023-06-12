import React from "react";
import { useState, useEffect } from "react";
import "./AboutUs.css";
import sertifikat1 from "../../assets/Images/sertifikat1.jpg";
import sertifikat2 from "../../assets/Images/sertifikat2.jpg";
import sertifikat3 from "../../assets/Images/sertifikat3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";

const AboutUs = () => {
  const [lang] = useLocalization();
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-text">
            <h2
              className="about-title text-center text-white fw-bold mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              
            >
              {languages[lang].about.about_title.title}
            </h2>
            <h3
              className="about-paragraph text-center  text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >{languages[lang].about.about_title.description}
            </h3>
          </div>
          <div className="sertifikat-box pt-5">
            <div className="row">
              <div className="col-md-4">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="sertifikat-img img-fluid mb-4"
                  src={sertifikat1}
                  alt=""
                  onClick={() => openModal(sertifikat1)}
                />
              </div>
              <div className="col-md-4">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="sertifikat-img img-fluid mb-4"
                  src={sertifikat2}
                  alt=""
                  onClick={() => openModal(sertifikat2)}
                />
              </div>
              <div className="col-md-4">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="sertifikat-img img-fluid mb-4"
                  src={sertifikat3}
                  alt=""
                  onClick={() => openModal(sertifikat3)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img className="modal-image" src={selectedImage} alt="" />
        </div>
      )}
    </section>
  );
};

export default AboutUs;
