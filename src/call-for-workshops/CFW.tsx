import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../Header";
import Menu from "./../Menu";
import Organisations from "./../Organisations";
import Footer from "./../Footer";
import { HeadingRenderer } from "../MarkdownRenderer";

export default function CFW() {
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

const md = `
# FDG 2021 Workshops
*More information will be provided as workshops open for submissions.*

## The 2021 Workshop on User Experience of Artificial Intelligence in Games (UXofAI) 
[Workshop website](http://uxofai.org/cfp.php)

*Henrik Warpefelt, Christoph Salge, Magy Seif El-Nasr, Jichen Zhu, Mirjam Eladhari and Harko Verhagen*

## The Second Game Analytics Workshop (GAW'21)
[Workshop website](https://sites.google.com/view/gaw21/)

*Rafet Sifa, Simon Demediuk and Anders Drachen*

## The 12th Workshop on Procedural Content Generation (PCG2021)
[Workshop website](http://www.pcgworkshop.com/cfp.php)

*Maren Awiszus, Jialin Liu, Christoph Salge and Anurag Sarkar*  

## Virtual Tabletop Game Play and Design for Diverse Participants and Purposes
[Workshop website](https://virtual-tabletop-games.com/)

*Elisabeth Gee, Taylor Kessner, Luis E. Pérez Cortés, Yuchan Gao and Jeremy Bernier*

# WORKSHOP PROPOSALS
#### Chairs
*Lindsay Grace — University of Miami, USA*  \n*Gorm Lai — Goldsmiths, University of London, UK*

**Workshop proposals for FDG 2021 have closed. We now invite authors to browse the above accepted workshops for their call for entries.**


FDG workshops are full-day or half-day sessions focused on current and emerging game-related topics. They can provide a setting for new developments to be presented, discussed and demonstrated, or be hands-on or studio-based. We especially encourage workshops and topics that involve participants from diverse disciplinary and other backgrounds working together to explore and advance new areas of game-related scholarship.

Workshop proposals are up to 6 pages (excluding references) in the single-column paper submission format​. They should include: a background section explaining and motivating the workshop, the objectives of the workshop, planned activities, the background of the organizer(s), publication plans (if any), anticipated number of participants, and the means for soliciting and selecting participants. Workshop proposals will not be included in the conference proceedings.

### Workshop Submissions
Workshop proposals should be submitted using [EasyChair](https://easychair.org/my/conference?conf=fdg2021).

*Enquiries: [fdg2021@easychair.org](mailto:fdg2021@easychair.org)*
`;
