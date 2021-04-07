import React from "react";
import ReactMarkdown from "react-markdown";

import { HeadingRenderer } from "./MarkdownRenderer";

export default function Footer() {
  return (
    <footer className="mt-16 py-16 text-orange-200 bg-orange-800">
      <div className="footer-wrapper mx-auto px-2">
        <div className="px-8">
          <ReactMarkdown source={md} renderers={{ heading: HeadingRenderer }} />
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

export const md = `
# STATEMENT OF VALUES
The organizing committee of the Foundations of Digital Games 2021 conference affirm the event's commitment to scholarly integrity, collegiality and professionalism, and inclusivity towards scholars of all backgrounds. 

# CONFERENCE COMMITTEE
**General Chairs** 

Allan Fowler — University of Auckland, New Zealand 

Johanna Pirker — Graz University of Technology, Austria

**Program Chairs** 

Alessandro Canossa — The Royal Danish Academy of Fine Arts, Copenhagen, Denmark

Ali Arya — Carleton University, Canada

**Proceedings Chair**

Casper Harteveld — Northeastern University, USA

**Diversity Chair**

SuAnne Fu — SCAD, USA 

**Website Chair**

Xavier Ho — Monash University, Australia

**Local Arrangements Chair**

Gabrielle Trepanier Jobin — Université du Québec à Montréal

**Online Arrangements Chair**

Laura Levy — Georgia Institute of Technology, USA

**Social Media Chair**

Enrica Loria, Fondazione Bruno Kessler, Italy

**FDG TV Chairs**

Tommy Thompson — AI and Games / King’s College London

Anne Sullivan — Georgia Institute of Technology

Mike Cook — Queen Mary University of London

Antonios Liapis — Institute of Digital Games, University of Malta
`;
