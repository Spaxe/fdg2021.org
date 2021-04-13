import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./Header";
import Menu from "./Menu";
import Organisations from "./Organisations";
import Footer from "./Footer";
import { HeadingRenderer } from "./MarkdownRenderer";

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

export const md = `
# CONFERENCE OVERVIEW
The 16th International Conference on the Foundations of Digital Games (FDG) 2021 is proud to invite research contributions in the form of papers, games and demos, doctoral consortium applications, as well as panel, competition, and workshop proposals. We invite contributions from within and across any discipline committed to advancing knowledge on the foundations of games: computer science and engineering, humanities and social sciences, arts and design, mathematics and natural sciences. Papers and Games-and-Demos submissions will receive double-blind peer reviews. Workshops, panels, competitions, and all other submissions will be single-blind. Games and Demos are guaranteed two reviews. There will be no rebuttal. The FDG 2021 proceedings will be published with the ACM Digital Library. ​All contributions should be submitted using [EasyChair](https://easychair.org/my/conference?conf=fdg2021). 

# THEME & VISION
The FDG 2021 conference theme is **Diversity & Inclusion through Games**. Work continues in our field to increase diversity and inclusion within games at large, and has found mixed success. With the latest reports showing game playing as something that is enjoyed by people of all genders, ages, ethnicities, and socio-economic background, it’s time to broaden the conversation to also include how we might use games themselves to increase diversity and inclusion in industry, academia, and society. With this theme in mind, we would like to encourage research and discussions that focus on this type of work, as well as encouraging work that crosses disciplinary boundaries. We also have added new tracks including Reflections to attract more diverse participation in the conference.

# DATES & LOCATION
Workshops: 2 August 2021

Conference: 3-6 August 2021

FDG2021 will be fully online.

# REGISTRATION
Full conference registration provides access to all academic talk sessions, workshops, competitions, social events, and the doctoral consortium. It provides access to all conference activities. [Click here to purchase your tickets](https://www.eventbrite.com/e/2021-foundations-of-digital-games-conference-tickets-150662466493).

# SUBMISSION TIMELINE
*All dates in Anywhere on Earth (AoE) timezone.*
### Proposals
~~**Workshops, Panels, Competitions**: 7 December 2020~~ (closed)

### Submissions
~~**Full Papers**: *1 February 2021*~~ (closed)

**Late-Breaking Work, Reflections, and Games and Demos**: _20 April 2021_ (extended)

**Doctoral Consortium applications**: _20 April 2021_ (extended)

### Notifications
~~**Workshops, and Competition proposals**: 7 February 2021~~

~~**Panels**: 21 February 2021~~ 

**Full Papers**: 1 April, 2021

**LBW, Reflections, Games and Demos, and Doctoral Consortium**: 12 June 2021

### Camera-ready deadlines
**Full Papers**: 15 June, 2021
`;
