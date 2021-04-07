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
# PAPER SUBMISSIONS
FDG invites authors to submit papers reporting new research. When submitting, authors are requested to select one of the available tracks that fits their submission most closely. The papers need to be anonymized and submitted in the single-column submission format, ACM Master Template ([https://www.acm.org/publications/taps/word-template-workflow](https://www.acm.org/publications/taps/word-template-workflow)), to a paper track. The authors of accepted papers will need to reformat them for publication, as described in the ACM workflow. Accepted papers will be included in the proceedings under their track. Papers can be between 8 and 16 pages in the single-column submission format, excluding references. Reviewers will judge the length of a paper relative to its contribution as part of the evaluation criteria. Papers are expected to be as concise as possible yet thorough. 

The conference papers will be organized into the following tracks.

## Game Development Methods and Technologies 
#### Chairs
*Kimberly Voll — Stray Bombay, USA, and Center for Digital Media, Canada*  \n*John Murray — University of Central Florida, USA*

This track is dedicated to submissions focused on different methods, technologies, and tools used for the development of computer games. The submissions may discuss development of both software and content. Topics include, but are not limited to, algorithms, software tools, methodologies, pipelines, and production issues. This track invites both scholarly studies as well as speculative position papers on the subject.
 
This track includes the use of virtual reality and augmented reality for games. Submissions that examine, validate, invalidate or create practices, patterns, mechanics, dynamics or aesthetics are encouraged to submit. Examples of such work include the examination and innovation of design methods for AR/VR, alternative methods of interaction and haptics, historic examinations of the involved technologies, analyses and critiques on the use of AR/VR, innovative AR/VR technologies and the examination of mechanics and games designed forAR/VR. 

## Games Beyond Entertainment and Game Education  
#### Chair
*Jose Zagal — University of Utah, USA*

This track calls for papers showing results on the use of games, gaming, and game design for primary goals that are not entertainment. Topics include serious or transformational games, games with a purpose, advergames and exergames, gamification and gameful design, game-based learning, informal learning in games, and educational and other ‘serious' uses of entertainment games and gaming practices. Authors are encouraged to highlight the importance of the target problem that the game is addressing, and how their design or research findings makes a contribution to the current state of research on games for a purpose. 

This track is also concerned with the teaching of games, game development and design, and game-related concepts at all levels of education and training. Topics include design and development of curricula, instructional methods, teaching tools and techniques, assessment methods, learning/instructional activities, collegiate game programs, e-sports and educational program management. 

## Game Analytics and Visualization 
#### Chair
*Rafet Sifa — Fraunhofer IAIS, Germany*

This track is suitable for all papers pertaining to aspects of game data science, analytics and game data visualization. This includes work based on player behavioral data analysis, including player modeling, churn analysis, and creating or understanding players' profiles as well as aspects of business intelligence, such as performance evaluation or workflow optimization. Papers submitted to this track should present contributions that advance the current state-of-the-art, taking into account the knowledge bases in academia and industry, of players, play behaviors, processes or performance. We encourage submissions that span methodological approaches including quantitative, qualitative and mixed-methods, as well as novel contributions to methodological approaches. Examples of topics include visualization of game data, analysis of behavioral (or other) game data, advances in methodological approaches to analyze and visualize game data, as well as applying or expanding statistical methods, machine learning, including deep learning, and AI, as well as visualization algorithms used to collect or analyze game data.

## Game Artificial Intelligence 
#### Chairs
*Matthew Guzdial — University of Alberta, Canada*  \n*Amy Hoover, New Jersey Institute of Technology, USA*

This track focuses on the many applications of computational and artificial intelligence to the playing, design, development, improvement, and testing of video games. Topics include general game-playing AI, procedural and player-driven content generation, mixed-initiative authoring tools, computational narrative, believable agents, and AI assisted game design.

## Game Criticism and Analysis 
#### Chair
*Daniel Vella — University of Malta*

This track calls for papers that approach the criticism and analysis of games from humanities-informed perspectives. Submissions are encouraged from scholars engaging in narrative, visual and software studies approaches to games and games criticism using methodologies such as archival research, hermeneutics, and oral history. This track will also consider critical theoretical and/or historical analysis of games, and game genres from perspectives such as (but not limited to) postcolonial theory, feminism, historicism, subaltern studies, queer theory, the environmental humanities, psychoanalysis, and other related topics. 
This track also includes the emerging trends such as esports and streaming from a humanities-informed perspective. Such work includes studies of demographic trends in esports and streaming, feminist and gender studies perspectives, social-cultural critiques and analyses of streaming and eSports subcultures, examination of societal and economic impact of eSports.


## Game Design and Player Experience 
#### Chair
*Elín Carstensdóttir — University of California - Santa Cruz, USA*

This track focuses on the exploration of different ways for designing and implementing interaction between the player and the game, as well as on understanding the experiences derived from those interactions. This track will consider qualitative and quantitative experimental studies. Topics include, but are not limited to, games design, mechanics, persuasive games, novel use of controllers, user research, and player psychology.

## Late-Breaking Work 
#### Chairs
*Amy Cook — University of Memphis, USA*  \n*Bill Kapralos — Ontario Tech University, Canada*

The Late-Breaking Work (LBW) track provides an opportunity to present work in progress, experimental projects, prototypes, projects with smaller scope than typical full papers, and research in early phases. LBW submissions are in the same format as full papers (ACM Master Article Template) but limited to 6 pages (single-column submission format, excluding references). They have to be presented as a poster at the conference.
 
## Reflections 
#### Chair
*Michael Cook — Queen Mary University of London, UK*

Conferences tend to focus on the successes, and it can be difficult to get important learnings about experimental work that did not go to plan. This is despite the fact that it is often the corrections from the many failures that lead to a single success. Iteration is important in game development as well as in academia. Examples of encouraged submissions are post-mortems and analyses of experimental work that did not go according to plan. *Reflection's submissions are in the same format as full papers (ACM Master Article Template) but limited to 6-8 pages (single-column submission format, excluding references).*

# SUBMISSIONS
All contributions should be submitted using [EasyChair](https://easychair.org/my/conference?conf=fdg2021).

*Enquiries: [fdg2021@easychair.org](mailto:fdg2021@easychair.org)*
`;
