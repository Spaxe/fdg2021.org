import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./Header";
import Menu from "./Menu";
import Organisations from "./Organisations";
import Footer from "./Footer";
import { HeadingRenderer } from "./MarkdownRenderer";
import Katja from "./assets/static/keynotes/katja.jpg";
import Rilla from "./assets/static/keynotes/rilla.jpg";
import Regan from "./assets/static/keynotes/regan.jpg";
import Mark from "./assets/static/keynotes/mark.jpg";

export default function Keynotes() {
  return (
    <div className="bg-orange-100 text-primary-red overflow-x-hidden">
      <a id="top"></a>
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
# KEYNOTES

![profile image](${Katja}#profile)

## Katja Hofmann
*Microsoft Research*

#### Biography
Katja Hofmann is a Principal Researcher and lead of Game Intelligence at Microsoft Research Cambridge. My team and I advance the state of the art in reinforcement learning, driven by current and future applications in video games. We share the belief that games will drive a transformation of how we interact with AI technology. My long-term goal is to develop AI systems that learn to collaborate with people, to empower their users and help solve complex real-world problems.

![profile image](${Rilla}#profile)

## Rilla Khaled
*Concordia University*

#### Biography
Dr. Rilla Khaled is an Associate Professor in the Department of Design and Computation Arts at Concordia University in Montréal, Canada, where she teaches interaction design, serious game design, and programming, among other subjects. She is the director of the Technoculture, Art, and Games (TAG) Research Centre, Canada's most well-established games research lab, in the Milieux Institute for Arts, Culture, and Technology. Dr. Khaled's research is focused on the use of interactive technologies to improve the human condition, a career-long passion that has led to diverse outcomes, including designing award-winning serious games, creating speculative prototypes of near-future technologies, developing a framework for game design specifically aimed at reflective outcomes, and working with Indigenous communities to use contemporary technologies to imagine new, inclusive futures.

![profile image](${Regan}#profile)

## Regan Mandryk
*University of Saskatchewan*

#### Biography
Regan Mandryk is a Professor of Computer Science at the University of Saskatchewan and a Tier 1 Canada Research Chair in Digital Gaming Technologies and Experiences. She pioneered the area of affective physiological evaluation for computer games in her Ph.D.
research with support from Electronic Arts. With over 200 publications that have been cited over 10000 times (including one of Google Scholar’s 10 classic papers in HCI from 2006), she continues to investigate novel ways of understanding players and their experiences, but also develops and evaluates games for health and wellbeing and games that foster interpersonal relationships. Regan has been the invited keynote speaker at several international game conferences, led Games research in the Canadian GRAND Network, organizes international conferences including the inaugural CHI PLAY, the inaugural CHI Games Subcommittee, and CHI 2018, and leads the first ever Canadian graduate training program on games user research (SWaGUR.ca) with $2.5 million of support from NSERC. She was inducted into the Royal Society of Canada’s College of New Scholars, Artists and Scientists in 2014, received the University of Saskatchewan New Researcher Award in 2015, the Canadian Association for Computer Science’s Outstanding Young Canadian Computer Science Researcher Prize in 2016, and the prestigious E.W.R. Steacie Fellowship in 2018.

![profile image](${Mark}#profile)

## Mark Billinghurst
*University of Auckland*

#### Biography
Professor Mark Billinghurst has a wealth of knowledge and expertise in human-computer interface technology, particularly in Augmented Reality (the overlay of three-dimensional images on the real world).

In 2002, the former HIT Lab US Research Associate completed his PhD in Electrical Engineering, at the University of Washington, under the supervision of Professor Thomas Furness III and Professor Linda Shapiro. As part of the research for his thesis titled Shared Space: Exploration in Collaborative Augmented Reality, Dr Billinghurst invented the Magic Book – an animated children’s book that comes to life when viewed through the lightweight head-mounted display (HMD).
`;
