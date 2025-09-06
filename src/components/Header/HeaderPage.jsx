import React, { useState } from "react";
import styles from "./HeaderPage.module.css";

const HeaderPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setActiveMenu(id);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h2>REACH-X</h2>


      <i
        className="fa-solid fa-bars"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>



      <div className={`${styles.holdmenu} ${menuOpen ? styles.active : ""}`}>
        <div
          onClick={() => handleScroll("home")}
          className={`${styles.menuItem} ${activeMenu === "home" ? styles.activeLink : ""}`}
        >
          Home
        </div>
        <div
          onClick={() => handleScroll("services")}
          className={`${styles.menuItem} ${activeMenu === "services" ? styles.activeLink : ""}`}
        >
          Services
        </div>
        <div
          onClick={() => handleScroll("faq")}
          className={`${styles.menuItem} ${activeMenu === "faq" ? styles.activeLink : ""}`}
        >
          FAQ
        </div>
        <div
          onClick={() => handleScroll("contact")}
          className={`${styles.menuItem} ${activeMenu === "contact" ? styles.activeLink : ""}`}
        >
          Contact Us
        </div>

        <div />
      </div>
    </div>
  );
};

export default HeaderPage;
