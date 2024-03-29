import React from "react";
import logo from "./assets/static/FDG21.png";

export default function Header() {
  return (
    <header className="header z-0">
      {/*  eslint-disable-next-line */}
      <a aria-hidden id="top"></a>
      {/* Logo */}

      <div className="w-screen relative">
        <div className="love-is-love w-full h-32 absolute top-0 left-0"></div>
        <div className="relative mx-auto max-w-lg">
          <img
            className="isometric-top ml-20 select-none"
            style={{ width: "28rem" }}
            src={logo}
            alt="FDG 21"
          />
          <div className="text-xl isometric-front">
            <h1 className="font-bold text-2xl mt-6">
              Foundations of Digital Games
            </h1>
            <p>
              <time dateTime="2021-08-17T00:00-04:00">2-6 August, 2021</time>
            </p>
            <p>Fully Online</p>
          </div>
        </div>
      </div>
    </header>
  );
}
