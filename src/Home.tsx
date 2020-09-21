/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import ReactMarkdown from "react-markdown";
import Menu from "./Menu";
import { md, importantDatesMd, footerMd, HeadingRenderer } from "./Copy";

interface Rss {
  rss: Channel;
}

interface Channel {
  channel: { item: Array<Item> };
}

interface Item {
  imageurl: Text;
  plainTitle: Text;
  link: Text;
}

interface Text {
  _text: string;
}

export default function Home() {
  return (
    <div className="bg-orange-100 text-primary-red">
      {/*  eslint-disable-next-line */}
      <a id="top"></a>
      <header className="w-full relative z-0">
        {/* Logo */}
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <div className="relative max-w-lg mx-auto p-6 flex flex-col justify-center items-center">
            <div className="absolute love-is-love w-infinite h-32 isometric-back"></div>
            <a href="/" className="menu-home" title="FDG 2021 Home">
              <img
                className="isometric-top"
                src="static/FDG21.png"
                alt="FDG 21"
              />
            </a>
            <div className="isometric-front absolute text-xl">
              <h1 className="font-bold text-center text-2xl mt-6">
                Foundations of Digital Games
              </h1>
              <p>
                <time dateTime="2021-08-17T00:00-04:00">3-6 August, 2021</time>
              </p>
              <p>Montreal, Canada / Online</p>
            </div>
          </div>

          {/* Gap intentionally left behind */}
          <div className="mx-auto"></div>
        </div>
      </header>

      {/* Primary Navigation */}
      <div className="wrapper relative lg:flex flex-row-reverse mx-auto px-2 z-10">
        <aside className="-mt-48 hidden lg:block text-xs absolute opacity-75 py-3 px-4">
          <ReactMarkdown
            source={importantDatesMd}
            renderers={{ heading: HeadingRenderer }}
          />
        </aside>

        {/* Main content */}
        <main className="ml-8 my-4 pr-8">
          <ReactMarkdown source={md} renderers={{ heading: HeadingRenderer }} />
        </main>

        <Menu />
      </div>

      <footer className="mt-16 py-16 text-white bg-orange-800">
        <div className="footer-wrapper mx-auto px-2">
          <aside>
            <div className="opacity-50 flex justify-start items-center mb-10 px-8 mix-color-burn">
              <div className="w-32 mr-8 relative">
                <img src="static/sponsors/UQAM.png" alt="UQAM" />
              </div>
              <div className="w-32 relative">
                <img src="static/sponsors/Microsoft.png" alt="Microsoft" />
              </div>
            </div>
          </aside>

          <div className="px-8 text-orange-200">
            <ReactMarkdown
              source={footerMd}
              renderers={{ heading: HeadingRenderer }}
            />
          </div>
          <aside className="text-xs text-orange-600 pl-8 mt-8 leading-tight">
            <p>
              Website made with
              <span role="img" className="px-1" aria-label="dragon">
                🐲
              </span>
              by
              <a href="https://jtg.design" className="px-1">
                Xavier Ho
              </a>
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
}
