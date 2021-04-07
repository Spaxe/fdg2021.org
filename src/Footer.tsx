import React from "react";
import ReactMarkdown from "react-markdown";

import { footerMd, HeadingRenderer } from "./Copy";

export default function Footer() {
  return (
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
  );
}
