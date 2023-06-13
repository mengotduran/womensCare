import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Drop1 from "../navLinks/Drop1";
import Drop2 from "../navLinks/Drop2";
import Drop3 from "../navLinks/Drop3";

export default function NavLinks() {
  const [lang, setLang] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const toggleLanguage = () => {
    setLang(!lang);
  };

  const handleSidebar = (status) => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const hamburgerClick = () => {
    setIsSidebarOpen(false);
    setIsActive(true);
  };

  return (
    <>
      <div className="nav_links">
        <div className="about_them_text">
          <h3>about them</h3>
        </div>
        <div className="nav_dropdown">
          <Drop1 title="NEWS" />
          <Drop2 title="OUR ACTIONS" />
          <Drop3 title="ACT WITH THEM" />
        </div>
      </div>
    </>
  );
};
