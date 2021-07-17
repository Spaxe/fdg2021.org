import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "./assets/static/FDG21.png";
import colour21 from "./assets/static/21_colour.png";

export default function Menu() {
  const [menuStyle, setMenuStyle] = useState("primary-menu-closed");
  const [backdrop, setBackdrop] = useState("hidden");
  const menuTransition = "transition-transform duration-150 ease-out";
  const backdropTransition = "transition-opacity duration-500 ease-out";

  const openMenu = () => {
    setMenuStyle(`${menuTransition}`);
    setBackdrop(`${backdropTransition}`);
  };

  const closeMenu = () => {
    setMenuStyle(`primary-menu-closed ${menuTransition}`);
    setBackdrop(`hidden ${backdropTransition}`);
  };

  return (
    <div>
      <nav
        onClick={openMenu}
        className="fixed select-none lg:hidden top-0 left-0 overflow-hidden w-16 h-20 my-8 mx-8 border-4 border-orange-500 rounded-full bg-yellow-100 flex items-center justify-center cursor-pointer"
      >
        <img
          className="absolute top-0 left-0 w-full p-2"
          src={colour21}
          alt="Open"
        />
        <p className="p-1 mt-10 text-xs font-bold relative z-10">Menu</p>
      </nav>

      <div
        onClick={closeMenu}
        className={`${backdrop} w-screen h-screen bg-purple-900 fixed top-0 left-0 opacity-50 lg:hidden`}
      ></div>

      <div
        className={`primary-menu ${menuStyle} fixed top-0 left-0 h-full overflow-y-auto bg-yellow-100 lg:bg-transparent lg:static lg:flex lg:h-auto lg:mt-6`}
      >
        {/* Quick links*/}
        <div className="nav font-bold text-md leading-tight my-12">
          <Link className="block lg:hidden" onClick={closeMenu} to="#top">
            <img className="w-48 mb-2 block" src={logo} alt="Logo" />
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/#conference-overview"
          >
            Conference Overview
          </Link>
          <Link className="block paper-type" onClick={closeMenu} to="/#theme---vision">
            Diversity and Inclusion Through Games
          </Link>
          <Link className="block paper-type" onClick={closeMenu} to="/#dates---location">
            Dates and Location
          </Link>
          <Link className="block paper-type" onClick={closeMenu} to="/#registration">
            Registration
          </Link>
          <Link
            className="block paper-type"
            onClick={closeMenu}
            to="/#submission-timeline"
          >
            Submission Timeline
          </Link>
          <Link className="block" onClick={closeMenu} to="/keynotes">
            <span role="img" aria-label="Star">
              🌟
            </span>{" "}
            Keynote Speakers
          </Link>
          <Link className="block" onClick={closeMenu} to="/conference-program">
            <span role="img" aria-label="Schedule">
              📅
            </span>{" "}
            Conference Program
          </Link>
          <a
            className="block"
            onClick={closeMenu}
            href="https://www.youtube.com/channel/UCcZ6WEOxANNqMoUCIGgB_xQ"
          >
            <span role="img" aria-label="TV">
              📺
            </span>{" "}
            FDG TV on YouTube
          </a>
          <a
            className="block"
            onClick={closeMenu}
            href="https://gendesignmc.engineering.nyu.edu/"
          >
            <span role="img" aria-label="Brick">
              🧱
            </span>{" "}
            Generative Design in Minecraft Competition
          </a>
          <Link
            className="block"
            onClick={closeMenu}
            to="/paper-awards"
          ><span role="img" aria-label="Award">
              🏆
            </span>{" "}
            Best Papers and Honorable Mentions
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/call-for-papers/#paper-submissions"
          >
            Conference Tracks
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#game-development-methods-and-technologies"
            className="block paper-type"
          >
            Game Development Methods and Technologies
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#games-beyond-entertainment-and-game-education"
            className="block paper-type"
          >
            Games Beyond Entertainment and Game Education
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#game-analytics-and-visualization"
            className="block paper-type"
          >
            Game Analytics and Visualization
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#game-artificial-intelligence"
            className="block paper-type"
          >
            Game Artificial Intelligence
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#game-criticism-and-analysis"
            className="block paper-type"
          >
            Game Criticism and Analysis
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#game-design-and-player-experience"
            className="block paper-type"
          >
            Game Design and Player Experience
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#late-breaking-work"
            className="block paper-type"
          >
            Late-breaking Work
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-papers/#reflections"
            className="block paper-type"
          >
            Reflections
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/call-for-workshops/#workshop-proposals"
          >
            Workshops
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-workshops/#the-2021-workshop-on-user-experience-of-artificial-intelligence-in-games--uxofai-"
            className="block paper-type"
          >
            The 2021 Workshop on User Experience of Artificial Intelligence in
            Games
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-workshops/#the-second-game-analytics-workshop--gaw-21-"
            className="block paper-type"
          >
            The Second Game Analytics Workshop
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-workshops/#the-12th-workshop-on-procedural-content-generation--pcg2021-"
            className="block paper-type"
          >
            The 12th Workshop on Procedural Content Generation
          </Link>
          <Link
            onClick={closeMenu}
            to="/call-for-workshops/#virtual-tabletop-game-play-and-design-for-diverse-participants-and-purposes"
            className="block paper-type"
          >
            Virtual Tabletop Game Play and Design for Diverse Participants and
            Purposes
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/call-for-activities/#panel-proposals"
          >
            Panels
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/call-for-activities/#competition-proposals"
          >
            Competitions
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/call-for-activities/#games-and-demos"
          >
            Games and Demos
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="/call-for-activities/#doctoral-consortium"
          >
            Doctoral Consortium
          </Link>
          <Link className="block" onClick={closeMenu} to="#statement-of-values">
            Statement of Values
          </Link>
          <Link
            className="block"
            onClick={closeMenu}
            to="#conference-committee"
          >
            Committee
          </Link>
        </div>
      </div>
    </div>
  );
}
