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
    <div className="bg-orange-100 text-primary-red overflow-x-hidden">
      {/*  eslint-disable-next-line */}
      <a id="top"></a>
      <div className="header z-0">
        {/* Logo */}

        <div className="w-screen relative">
          <div className="love-is-love w-full h-32 absolute top-0 left-0"></div>
          <div className="relative mx-auto max-w-lg">
            <a href="/" className="block menu-home" title="FDG 2021 Home">
              <img
                className="isometric-top ml-20"
                style={{ width: "28rem" }}
                src="static/FDG21.png"
                alt="FDG 21"
              />
            </a>
            <div className="text-xl isometric-front">
              <h1 className="font-bold text-2xl mt-6">
                Foundations of Digital Games
              </h1>
              <p>
                <time dateTime="2021-08-17T00:00-04:00">3-6 August, 2021</time>
              </p>
              <p>Fully Online</p>
            </div>
            <aside className="mt-12 -mr-64 hidden lg:block max-w-xs text-xs absolute right-0 top-0 opacity-75 py-3 px-4">
              <ReactMarkdown
                source={importantDatesMd}
                renderers={{ heading: HeadingRenderer }}
              />
            </aside>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="wrapper relative lg:flex flex-row-reverse mx-auto px-2 z-20">
        {/* Main content */}
        <main className="ml-8 mt-10 pr-8">
          <ReactMarkdown source={md} renderers={{ heading: HeadingRenderer }} />

          <aside className="">
            <h1 className="mb-4 uppercase">Sponsors</h1>
            <div className="flex justify-start items-center">
              <a
                className="block w-64 mr-8 relative"
                href="https://uqam.ca/en/information/about/"
                title="Université du Québec à Montréal"
              >
                <img src="static/sponsors/UQAM.png" alt="UQAM" />
              </a>
              <a
                className="block w-48 mr-8 relative"
                href="https://www.microsoft.com"
                title="Microsoft"
              >
                <img src="static/sponsors/Microsoft.png" alt="Microsoft" />
              </a>
            </div>
          </aside>
        </main>

        <Menu />
      </div>

      <footer className="mt-16 py-16 text-orange-200 bg-orange-800">
        <div className="footer-wrapper mx-auto px-2">
          <div className="px-8">
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
