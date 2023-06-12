import React, { useContext } from "react";
import burger from "../../assets/Icons/burger.png"
import "./Navbar.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";


const Navbar = () => {
  const [lang, setLang] = useLocalization()

  return (
    <header>
     <div className="container">
        <div className="wrapper d-flex align-items-center justify-content-between">
          <a href="/" className="navbar-brand">
            AKLIS GROUP
          </a>
          <nav className="navbar">
            <ul className="wrapper d-flex align-items-center justify-content-between gap-5">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  {languages[lang].navbar.nav.navitem1}
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                {languages[lang].navbar.nav.navitem2}
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link">
                {languages[lang].navbar.nav.navitem3}
                </a>
              </li>
              <li className="nav-item">
                <a href="#contactus" className="nav-link">
                {languages[lang].navbar.nav.navitem4}
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-1">
            <select name="" id="" className="form-select bg-transparent"  onChange={(evt) => setLang(evt.target.value) }>
              <optgroup value={lang} label="Language" className="text-dark">
                <option value="uz">Uzbek</option>
                <option value="ru">Russia</option>
                <option value="en">English</option>
              </optgroup>
            </select>
              <img className="burger" src={burger} alt="" width="50px" />
          </div>
        </div>
      </div> 
    </header>
  );
};

export default Navbar;
