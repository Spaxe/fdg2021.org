import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../Header";
import Menu from "./../Menu";
import Organisations from "./../Organisations";
import Footer from "./../Footer";
import { HeadingRenderer } from "../MarkdownRenderer";

export default function CFP() {
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
# BEST PAPER AWARDS

### Web-based Programming for Low-cost Gaming Handhelds
Michal Moskal, Thomas Ball, Abhijith Chatra, James Devine, Peli de Halleux, Steve Hodges, Shannon Kao, Richard Knoll, Galen Nickel, Jacqueline Russell, Joey Wunderlich and Daryl Zuniga*

### Improving the Discoverability of Indie Games by Leveraging their Similarity to Top-Selling Games
Ngoc Quang Vu and Cor-Paul Bezemer

### Dealing with Adversarial Player Strategies in the Neural Network Game iNNk through Ensemble Learning
Mathias Löwe, Jennifer Villareale, Evan Freed, Aleksanteri Sladek, Jichen Zhu and Sebastian Risi

### There Is No Escape: Theatricality in Hades
Nick Junius, Max Kreminski and Michael Mateas

### Increasing player engagement, retention and performance through the inclusion of educational content in a citizen science game
Rogerio de Leon Pereira, Anthony Tan, Andrea Bunt and Olivier Tremblay-Savard

### A Grounded Theory of Accessible Game Development
Jozef Kulik, Jen Beeston and Paul Cairns

## Honorable Mentions

### Design-Driven Requirements for Computationally Co-Creative Game AI Design Tools
Nathan Partlan, Erica Kleinman, Jim Howe, Sabbir Ahmad, Stacy Marsella and Magy Seif El-Nasr

### Detecting Spam Game Reviews on Steam with a Semi-Supervised Approach
Pengze Bian, Lei Liu and Penny Sweetser

### Questgram \\[Qg\\]: Toward a Mixed-Initiative Quest Generation Tool
Alberto Alvarez, Eric Grevillius, Elin Olsson and Jose Font

### Orange is Sus: Among Us and Political Play
Mel Stanfill, Anastasia Salter and Anne Sullivan

### Let it Bee: A Case Study of Applying Triadic Game Design for Designing Virtual Reality Training Games for Beekeepers
Ursina Kellerhals, Richard Wetzel and Naomi Burgess

`;
