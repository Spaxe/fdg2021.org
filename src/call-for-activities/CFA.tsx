import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../Header";
import Menu from "./../Menu";
import Organisations from "./../Organisations";
import Footer from "./../Footer";
import { HeadingRenderer } from "../MarkdownRenderer";

export default function CFA() {
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
# PANEL PROPOSALS
#### Chairs
*Laura Levy — Georgia Institute of Technology, USA*  \n*Henrik Warpefelt — Södertörn University, Sweden*

**Panel proposals have closed.**

FDG welcomes debate-style panels and emerging-area style panels that consolidate and explain recent work on a subject of interest to the FDG community. An interested researcher that wishes to carry out a panel should first recruit members for the panel and discuss the topics before submitting a panel proposal to FDG. Please consider diversity and representation when recruiting participants to the panel. Panel proposals are up to  6 pages (excluding references) in the single-column paper submission format ​. Contents of the proposal should include the topic, participants, how the panel is organized, and a citation-supported statement of why the event is relevant and topical (also accounting for this year's theme of "Diversity & Inclusion through Games"). Panel proposals will not be included in the proceedings.

# COMPETITION PROPOSALS
#### Chair
*Laureline Chiapello - University of Quebec at Chicoutimi, Canada*

**Competition proposals for FDG 2021 have closed. We now invite authors to submit to the [Generative Design in Minecraft](https://gendesignmc.engineering.nyu.edu/) competition.**

FDG welcomes competition proposals, with a maximum length of 6 pages (excluding references) in the single-column paper submission format. Contents of the proposal should include a description of the competition and the organizers, the criteria for winners, anticipated number of participants, past number of participants (if the competition is ongoing), and how entries to the competition will be submitted. Competition proposals (or outcomes) will not be included in the proceedings.

# GAMES AND DEMOS
#### Chair
*Fares Kayali - University of Vienna, Austria*

The games and demos exhibition provides a forum for demonstrations of work best suited to interaction rather than a paper or a formal presentation. This track encourages submissions of games in various stages of development, from playable physical mock-ups to full-fledged implementations, as well as technical demos showcasing the latest tools, techniques, and systems created for games by academic or industrial research groups, or other early-stage or late-breaking research not yet ready for formal presentation.

Submissions are handled using [EasyChair](https://easychair.org/my/conference?conf=fdg2021). They should include a description (up to 6 pages, excluding references, in the single-column paper submission format), an unedited video illustrating the game or technology, and (if possible) a link to the demo. Games and tech demos will be presented at a dedicated games and tech demo session open to the general public. Selected students projects receive a conference registration waiver for the day of the demo session.

# DOCTORAL CONSORTIUM
#### Chair
*Daniela Romano — University College London, UK*

FDG 2021 will include a Doctoral Consortium where PhD students can receive early feedback on their research from fellow students, researchers, and experienced faculty in the area. The consortium is primarily for PhD students who intend to pursue a career in academia and who will soon propose, or have recently proposed, their dissertation research.

To apply, students should submit a non-anonymized paper up to 6 pages (excluding references) in the single-column paper submission format,​ describing their proposed research. The paper should address the goals of their research, the proposed approach, any results, and plans for completing the work. This should be accompanied by their CV and a short letter explaining how they would benefit from the consortium and what questions they want to discuss (general and/or specific to their research).

Accepted Doctoral Consortium students will give a presentation and are invited to present a poster on their abstracts during the conference. Doctoral consortium papers will not be published in the main proceedings.

# SUBMISSIONS
All contributions should be submitted using [EasyChair](https://easychair.org/my/conference?conf=fdg2021).

*Enquiries: [fdg2021@easychair.org](mailto:fdg2021@easychair.org)*
`;
