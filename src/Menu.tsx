import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { HashLink as Link } from "react-router-hash-link";
import { importantDatesMd, HeadingRenderer } from "./Copy";

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
    <>
      <nav
        onClick={openMenu}
        className="fixed lg:hidden top-0 left-0 overflow-hidden w-16 h-16 my-8 -mx-6 border-4 border-orange-500 rounded-full bg-yellow-100 flex items-center justify-center cursor-pointer"
      >
        <img className="w-3/4 h-3/4" src="favicon.png" alt="Menu" />
      </nav>

      <div
        onClick={closeMenu}
        className={`${backdrop} w-screen h-screen bg-purple-900 fixed top-0 left-0 opacity-50 lg:hidden`}
      ></div>

      <div
        className={`primary-menu ${menuStyle} py-12 fixed top-0 left-0 h-full overflow-y-auto bg-yellow-100 lg:bg-transparent lg:inset-auto lg:static lg:flex`}
      >
        {/* Quick links*/}
        <nav className="flex flex-col font-bold text-md leading-tight">
          <Link onClick={closeMenu} to="#top">
            <img
              className="w-48 mb-2 lg:hidden block"
              src="static/FDG21.png"
              alt="Logo"
            />
          </Link>
          <Link onClick={closeMenu} to="#conference-overview">
            FDG 2021
          </Link>
          <Link onClick={closeMenu} to="#theme---vision">
            Diversity and Inclusion Through Games
          </Link>
          <Link onClick={closeMenu} to="#dates---location">
            Montreal, Canada
          </Link>

          <aside className="block lg:hidden text-xs font-normal my-2 px-4 pt-3 pb-5 bg-orange-200">
            <ReactMarkdown
              source={importantDatesMd}
              renderers={{ heading: HeadingRenderer }}
            />
          </aside>

          <Link onClick={closeMenu} to="#paper-submissions">
            Papers
          </Link>
          <Link
            onClick={closeMenu}
            to="#game-development-methods-and-technologies"
            className="paper-type"
          >
            Game Development Methods and Technologies
          </Link>
          <Link
            onClick={closeMenu}
            to="#games-beyond-entertainment"
            className="paper-type"
          >
            Games Beyond Entertainment
          </Link>
          {/* <Link
            onClick={closeMenu}
            to="#esports-and-streaming"
            className="paper-type"
          >
            Esports and Streaming
          </Link> */}
          <Link
            onClick={closeMenu}
            to="#game-analytics-and-visualization"
            className="paper-type"
          >
            Game Analytics and Visualization
          </Link>
          <Link
            onClick={closeMenu}
            to="#game-artificial-intelligence"
            className="paper-type"
          >
            Game Artificial Intelligence
          </Link>
          <Link
            onClick={closeMenu}
            to="#game-criticism-and-analysis"
            className="paper-type"
          >
            Game Criticism and Analysis
          </Link>
          <Link
            onClick={closeMenu}
            to="#game-design-and-player-experience"
            className="paper-type"
          >
            Game Design and Player Experience
          </Link>
          {/*           
          <Link onClick={closeMenu} to="#game-education" className="paper-type">
            Game Education
          </Link> */}
          <Link
            onClick={closeMenu}
            to="#late-breaking-work"
            className="paper-type"
          >
            Late-breaking Work
          </Link>
          <Link onClick={closeMenu} to="#reflections" className="paper-type">
            Reflections
          </Link>
          {/* <Link
            onClick={closeMenu}
            to="#virtual-reality-and-augmented-reality-in-games"
            className="paper-type"
          >
            Virtual Reality and Augmented Reality in Games
          </Link> */}
          <Link onClick={closeMenu} to="#workshop-proposals">
            Workshops
          </Link>
          <Link onClick={closeMenu} to="#panel-proposals">
            Panels
          </Link>
          <Link onClick={closeMenu} to="#competition-proposals">
            Competitions
          </Link>
          <Link onClick={closeMenu} to="#games-and-demos">
            Games and Demos
          </Link>
          <Link onClick={closeMenu} to="#doctoral-consortium">
            Doctoral Consortium
          </Link>
          <Link onClick={closeMenu} to="#submissions">
            Submissions
          </Link>
          <Link onClick={closeMenu} to="#statement-of-values">
            Statement of Values
          </Link>
          <Link onClick={closeMenu} to="#conference-committee">
            Committee
          </Link>
        </nav>
      </div>
    </>
  );
}
