import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./navLinks";

export const ResponsiveNav = () => {
  const [lang, setLang] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);


  const toggleLanguage = () => {
    setLang(!lang);
  };

  const handleSidebar = (status) => {
    setIsSidebarOpen(!isSidebarOpen)
  };

  const hamburgerClick = () =>{
    setIsSidebarOpen(false)
    setIsActive(true)
  }


  return (
    <>
      <header className="main-header">
        <div className="main_div">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo 7.png" className="nav_img_logo" />
            </Link>
          </div>
          <button className="navbar_donation">Make a donation</button>
          <div className="last-SH">
            <div className="nav_link_wrapper">
              <NavLinks />
            </div>
            <div className="hamburger_container">
              <div
                className={`${
                  isActive ? "hamburger" : "hamburger menu-active"
                }`}
                onClick={() => {
                  if (isActive) {
                    setIsActive(!isActive);
                    handleSidebar(true);
                  } else {
                    setIsActive(!isActive);
                    handleSidebar(false);
                  }
                }}
              >
                <span className="hamburger-line hamburger-line-top"></span>
                <span className="hamburger-line hamburger-line-middle"></span>
                <span className="hamburger-line hamburger-line-bottom"></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}`}
      >
        <NavLinks />
      </div>
    </>
  );
};
