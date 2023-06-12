import React from "react";
import "./HeadSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";

const HeadSection = () => {
  const [lang] = useLocalization();

  AOS.init();
  return (
    <section className="headSection">
      <div className="container">
        <div className="head-wrapper">
          <div className="text-box">
            <h1 data-aos="fade-up"
              data-aos-duration="1000" className="main-text"> {languages[lang].head_section.main_title.title} </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
