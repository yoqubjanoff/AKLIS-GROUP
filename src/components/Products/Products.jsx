import React, { useEffect } from "react";
import "./Products.css";
import rasm1 from "../../assets/Images/rasm1.jpg";
import rasm2 from "../../assets/Images/rasm2.jpg";
import rasm3 from "../../assets/Images/rasm3.jpg";
import rasm4 from "../../assets/Images/rasm4.jpg";
import rasm5 from "../../assets/Images/rasm5.jpg";
import rasm6 from "../../assets/Images/rasm6.jpg";
import rasm7 from "../../assets/Images/rasm7.jpg";
import rasm8 from "../../assets/Images/rasm8.jpg";
import rasm9 from "../../assets/Images/rasm9.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";


const Products = () => {
  const [lang] = useLocalization();

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);


  const images = [
    rasm1,
    rasm2,
    rasm3,
    rasm4,
    rasm5,
    rasm6,
    rasm7,
    rasm8,
    rasm9,
  ];

  return (
    <section id="products" className="products-section mt-5 py-5">
      <div className="container">
        <h2 className="text-center mb-5 our-products ">{languages[lang].products.products_title.title}</h2>
        <div className="row">
          {images.map((image, index) => (
            <div
              className="col-md-4 cards border-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
            >
              <div className="card">
                <img src={image} alt="" className="card-img-top card-img" />
                <div className="card-body">
                  <h5 className="card-title">{languages[lang].products.products_title.description1}</h5>
                  <p className="card-text text-muted">
                    {languages[lang].products.products_title.description2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
