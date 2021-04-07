import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./Header";
import Menu from "./Menu";
import Organisations from "./Organisations";
import Footer from "./Footer";
import { md, HeadingRenderer } from "./Copy";

export default function Home() {
  return (
    <div className="bg-orange-100 text-primary-red overflow-x-hidden">
      <Header />

      <div className="wrapper relative lg:flex flex-row-reverse mx-auto px-2 z-20">
        {/* Main content */}
        <main className="ml-8 mt-10 pr-8">
          <ReactMarkdown source={md} renderers={{ heading: HeadingRenderer }} />

          <Organisations />
        </main>

        <Menu />
      </div>

      <Footer />
    </div>
  );
}
