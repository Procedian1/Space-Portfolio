"use client";
import Image from "next/image";

export default function HeaderStatic() {
  return (
    <div id="header-static" style={{paddingTop: 10}}className="header-static">
      <div className="nav-bar-white">
        <div />
        {/* Logo */}
        <a href="#about" className="flex-1">
          <Image src="./images/final-logo.svg" alt="Final Logo" width={100} height={100} />
        </a>

        {/* Middle links */}
        <nav className="nav">
          <ul className="nav-list nav-text-size">
            <li><a href="#projects" className="nav-style">Projects</a></li>
            <li><a href="#involvement" className="nav-style">Involvement</a></li>
            <li><a href="#extras" className="nav-style">Extras</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <nav className="contact">
          <div className="nav-list nav-text-size contact-style-white">
            <a href="#contact" className="default-text">Contact Me</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
