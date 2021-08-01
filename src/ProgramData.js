const workshopDay = [
  {
    time: "12:45",
    type: "workshop",
    title: "The Second Game Analytics Workshop (GAW'21)",
    url: "https://sites.google.com/view/gaw21/"
  },
  {
    time: "13:00",
    type: "workshop",
    title: "The 12th Workshop on Procedural Content Generation (PCG2021)",
    url: "http://www.pcgworkshop.com/"
  },
  {
    time: "14:00",
    type: "workshop",
    title:
      "The 2021 Workshop on User Experience of Artificial Intelligence in Games (UXofAI)",
    url: "http://uxofai.org/"
  },
  {
    time: "19:00",
    type: "workshop",
    title:
      "Workshop: Virtual Tabletop Game Play and Design for Diverse Participants and Purposes",
    url: "https://virtual-tabletop-games.com/"
  }
];

const day1 = [
  {
    time: "13:00",
    type: "general",
    title: "Opening Remarks",
    zoom: "96063553502"
  },
  {
    time: "13:20",
    type: "keynote",
    title: "Keynote Presentation",
    author: "Rilla Khaled",
    zoom: "96628085612"
  },
  {
    time: "14:00",
    type: "papers",
    title: "Papers: Game Artificial Intelligence 1",
    zoom: "91785398530",
    presentations: [
      {
        title:
          "Dealing with Adversarial Player Strategies in the Neural Network Game iNNk through Ensemble Learning",
        author:
          "Mathias Löwe, Jennifer Villareale, Evan Freed, Aleksanteri Sladek, Jichen Zhu and Sebastian Risi"
      },
      {
        title:
          "Leveraging Reinforcement Learning and WaveFunctionCollapse for Improved Procedural Level Generation",
        author: "Mathias Babin and Michael Katchabaw"
      },
      {
        title:
          "Fine-tuning GPT-2 on annotated RPG quests for NPC dialogue generation",
        author: "Judith van Stegeren and Jakub Myśliwiec"
      }
    ]
  },
  {
    time: "15:00",
    type: "papers",
    title: "Papers: Game Design and Player Experience 1",
    zoom: "92097888410",
    presentations: [
      {
        title: "A Grounded Theory of Accessible Game Development",
        author: "Jozef Kulik, Jen Beeston and Paul Cairns"
      },
      {
        title:
          "“Slow down and look”: Desirable aspects of failure in video games, from the perspective of players",
        author: "Charline Foch and Ben Kirman"
      },
      {
        title: "The Struggle is Spiel: On Failure and Success in Games",
        author: "Julian Frommel, Madison Klarkowski and Regan Mandryk"
      }
    ]
  },
  {
    time: "16:00",
    type: "posters",
    title: "Break: Poster session",
    url: "https://www.virtualchair.net/events/fdg21",
    presentations: [
      {
        title:
          "Correlating Facial Expressions and Subjective Player Experiences in Competitive Hearthstone",
        author:
          "Paris Mavromoustakos-Blom, Mehmet Kosa, Sander Bakkes and Pieter Spronck"
      },
      {
        title:
          "Antagonistic Procedural content generation of sparse reward game",
        author: "Shaoyou Xie, Wei Zhou and Honglei Han"
      },
      {
        title: "Neurosymbolic Map Generation with VQ-VAE and WFC",
        author: "Isaac Karth, Batu Aytemiz, Ross Mawhorter and Adam M. Smith"
      }
    ]
  },
  {
    time: "17:00",
    type: "papers",
    title: "Papers: Games Beyond Entertainment and Game Education 1",
    zoom: "95369436332",
    presentations: [
      {
        title:
          "Let it Bee: A Case Study of Applying Triadic Game Design for Designing Virtual Reality Training Games for Beekeepers",
        author: "Ursina Kellerhals, Richard Wetzel and Naomi Burgess"
      },
      {
        title:
          "Fighting COVID-19 at Purdue University: Design and Evaluation of a Game for Teaching COVID-19 Hygienic Best Practices",
        author:
          "Dominic Kao, Amogh Joshi, Christos Mousas, Abhigna Peddireddy, Arjun Kramadhati Gopi, Jianyao Li, John Springer, Bethany S. McGowan and Jason B. Reed"
      },
      {
        title:
          "Indigenous Worldviews in Digital Games: Sámi Perspectives in Gufihtara eallu (2018) and Rievssat (2018)",
        author: "Elizabeth Nijdam"
      }
    ]
  },
  {
    time: "18:00",
    type: "panel",
    title: "Panel: Supporting LGBTQ Events Online",
    zoom: "97160767374",
    author:
      "Ashley ML Brown, Greg Bayles, Aaron Kapral and Bahar Vaghari Moghaddam"
  },
  {
    time: "19:00",
    type: "sponsored",
    zoom: "92083152705",
    title:
      "Sponsored Talk: We’ve always been here: Neurodiversity in Game Development",
    author: "Laura Luethe, Sr Research Manager, Games Market Research, Xbox"
  }
];

const day2 = [
  {
    time: "13:00",
    type: "keynote",
    title: "Keynote Presentation",
    author: "Katja Hofmann",
    zoom: "91986662489"
  },
  {
    time: "14:00",
    type: "papers",
    title: "Papers: Game Development Methods and Technologies 1",
    zoom: "99790684950",
    presentations: [
      {
        title:
          "Design-Driven Requirements for Computationally Co-Creative Game AI Design Tools",
        author:
          "Nathan Partlan, Erica Kleinman, Jim Howe, Sabbir Ahmad, Stacy Marsella and Magy Seif El-Nasr"
      },
      {
        title: "Squeezer - A Mixed-Initiative Tool for Designing Juice Effects",
        author: "Mads Johansen, Martin Pichlmair and Sebastian Risi"
      },
      {
        title:
          "Fractal Coordinates for Incremental Procedural Content Generation",
        author: "Peter Mawhorter"
      }
    ]
  },
  {
    time: "15:00",
    type: "papers",
    title: "Papers: Game Analytics and Visualization 1",
    zoom: "96602006034",
    presentations: [
      {
        title:
          "Improving the Discoverability of Indie Games by Leveraging their Similarity to Top-Selling Games",
        author: "Ngoc Quang Vu and Cor-Paul Bezemer"
      },
      {
        title:
          "Detecting Spam Game Reviews on Steam with a Semi-Supervised Approach",
        author: "Pengze Bian, Lei Liu and Penny Sweetser"
      },
      {
        title:
          "#StayHome Playing LoL - Analyzing Players' Activity and Social Bonds in League of Legends During Covid-19 Lockdowns",
        author: "Simone Petrosino, Enrica Loria and Johanna Pirker"
      }
    ]
  },
  {
    time: "16:00",
    type: "posters",
    title: "Break: Poster session",
    url: "https://www.virtualchair.net/events/fdg21",
    presentations: [
      {
        title:
          "Common Narrative in Educational Video Games: A Design of Games to Teach Circuits",
        author: "Declan McClintock and Charles Owen"
      },
      {
        title:
          "The temperature of morality: a behavioral study concerning the effect of moral decisions on facial thermal variations in video games",
        author: "Gianluca Guglielmo and Michal Klincewicz"
      },
      {
        title: "Uplifting Us: A BIPOC Game Design Case Study",
        author:
          "Christopher Brooks, Erica Principe Cruz, Jamie Camera and Alexandra To"
      }
    ]
  },
  {
    time: "17:00",
    type: "papers",
    title: "Papers: Game Criticism and Analysis 1",
    zoom: "99150877350",
    presentations: [
      {
        title: "There Is No Escape: Theatricality in Hades",
        author: "Nick Junius, Max Kreminski and Michael Mateas"
      },
      {
        title: "Orange is Sus: Among Us and Political Play",
        author: "Mel Stanfill, Anastasia Salter and Anne Sullivan"
      },
      {
        title:
          "The Human Fantasy: Exploring race and ethnicity through Dungeons & Dragons",
        author: "Antoine Prémont and Samuel Heine"
      }
    ]
  },
  {
    time: "18:00",
    type: "panel",
    title: "Panel: Research Methods in Game Education",
    zoom: "92950042783",
    author:
      "Hartmut Koenitz, Petri Lankoski, Mirjam Palosaari Eladhari, Staffan Björk, Hanli Geyser and Rilla Khaled"
  },
  {
    time: "19:00",
    type: "papers",
    title: "Papers: Games Beyond Entertainment and Game Education 2",
    zoom: "96131546535",
    presentations: [
      {
        title:
          "Learning Through Play: A Study Investigating How Effective Video Games Can Be Regarding Keyboard Education at a Beginner Level",
        author:
          "Jack Brett, Christos Gatzidis, Tom Davis, Panos Amelidis, Ning Xu and Toby Gladwell"
      },
      {
        title:
          "A Comparison of Augmented Reality and Digital Versions of a Citizen Science Game",
        author:
          "Kutub Gandhi, Josh Aaron Miller, Sofia Spatharioti, Archana Apte, Borna Fatehi, Sara Wylie and Seth Cooper"
      },
      {
        title:
          "Teaching esports to young students with autism: Exploring pedagogical possibilities and challenges",
        author:
          "Rune K. L. Nielsen, Thorkild Hanghøj, Morten Boller and Peter Mollerup"
      }
    ]
  },
  {
    time: "20:00",
    type: "demos",
    title: "Games and Demos",
    demos: {
      "Witch's Way": "https://andrewphelps.itch.io/the-witchs-way",
      "Ambi Game": "https://ambigame.app/",
      Floating: "https://quantumcoffee.itch.io/floating",
      "Gameboy ROM": "https://isaackarth.com/games/rom_gen_test_5/",
      MapBuilder: "https://mmouree.github.io/MapBuilders/"
    }
  }
];

const day3 = [
  {
    time: "13:00",
    type: "keynote",
    title: "Keynote Presentation",
    zoom: "92386616705",
    author: "Mark Billinghurst"
  },
  {
    time: "14:00",
    type: "papers",
    title: "Papers: Game Artificial Intelligence 2",
    zoom: "96590469689",
    presentations: [
      {
        title: "Meta-Learning a Solution to the Hanabi Ad-Hoc Challenge",
        author:
          "Aron Sarmasi, Timothy Zhang, Chu-Hung Cheng, Huyen Pham, Xuanchen Zhou, Duong Nguyen, Soumil Shekdar and Joshua McCoy"
      },
      {
        title:
          "Questgram [Qg]: Toward a Mixed-Initiative Quest Generation Tool",
        author: "Alberto Alvarez, Eric Grevillius, Elin Olsson and Jose Font"
      },
      {
        title:
          "Softlock Detection for Super Metroid with Computation Tree Logic",
        author: "Ross Mawhorter and Adam Smith"
      }
    ]
  },
  {
    time: "15:00",
    type: "papers",
    title: "Papers: Game Design and Player Experience 2",
    zoom: "95991429041",
    presentations: [
      {
        title:
          "Integrating Serious and Casual Game Design Approaches: A Framework for Activist-Casual Game Design",
        author: "Daniel King"
      },
      {
        title:
          "It's Badging Time: Permanence, Expiration, and Lifespan of Digital Badges",
        author: "Joey R. Fanfarelli and Paul M. Harden"
      },
      {
        title:
          "Towards explainable prediction of player frustration in video games",
        author: "Max Wolterink and Sander Bakkes"
      }
    ]
  },
  {
    time: "16:00",
    type: "posters",
    title: "Break: Poster session",
    url: "https://www.virtualchair.net/events/fdg21",
    presentations: [
      {
        title:
          "Personalizing Gameful Elements in Social Exergames: An Exploratory Study",
        author:
          "Gerry Chan, Ali Arya, Rita Orji, Zhao Zhao and Anthony Whitehead"
      },
      {
        title:
          "Using Machine Learning to Predict Game Outcomes Based on Player-Champion Experience in League of Legends",
        author:
          "Tiffany D. Do, Seong Ioi Wang, Dylan S. Yu, Matthew G. McMillian and Ryan P. McMahan"
      },
      {
        title:
          "Modular Reinforcement Learning Framework for Learners and Educators",
        author: "Rachael Versaw, Samantha Schultz, Kevin Lu and Richard Zhao"
      }
    ]
  },
  {
    time: "17:00",
    type: "papers",
    title: "Papers: Games Beyond Entertainment and Game Education 3",
    zoom: "98420725395",
    presentations: [
      {
        title:
          "Ruby's Mission: An Applied Gaming Intervention for reducing Loneliness of Children with Chronic Illness",
        author:
          "Dionysis Alexandridis, Sander C. J. Bakkes, Sanne L. Nijhof, Elise van de Putte and Remco C. Veltkamp"
      },
      {
        title:
          "Increasing player engagement, retention and performance through the inclusion of educational content in a citizen science game",
        author:
          "Rogerio de Leon Pereira, Anthony Tan, Andrea Bunt and Olivier Tremblay-Savard"
      }
    ]
  },
  {
    time: "18:00",
    type: "panel",
    title:
      "Panel: Playful Pandemic Pedagogy Online: The bad, the ugly, and the actually quite good",
    zoom: "93048915465",
    author: "Mia Consalvo, Andrew Phelps, Lindsay Grace and Roger Altizer"
  },
  {
    time: "19:00",
    type: "papers",
    title: "Papers: Game Artificial Intelligence 3",
    zoom: "95080878649",
    presentations: [
      {
        title: "Towards Disambiguating Quests as a Technical Term",
        author: "Kristen Yu, Nathan Sturtevant and Matthew Guzdial"
      },
      {
        title:
          "Generating and Blending Game Levels via Quality-Diversity in the Latent Space of a Variational Autoencoder",
        author: "Anurag Sarkar and Seth Cooper"
      }
    ]
  },
  {
    time: "20:00",
    type: "demos",
    title: "Games and Demos",
    demos: {
      "Witch's Way": "https://andrewphelps.itch.io/the-witchs-way",
      "Ambi Game": "https://ambigame.app/",
      Floating: "https://quantumcoffee.itch.io/floating",
      "Gameboy ROM": "https://isaackarth.com/games/rom_gen_test_5/",
      MapBuilder: "https://mmouree.github.io/MapBuilders/"
    }
  }
];

const day4 = [
  {
    time: "13:00",
    type: "keynote",
    title: "Keynote Presentation",
    author: "Regan Mandryk",
    zoom: "99092833724"
  },
  {
    time: "14:00",
    type: "papers",
    title:
      "Papers: Game Development Methods and Technologies / Game Criticism and Analysis",
    zoom: "95074607184",
    presentations: [
      {
        title: "Modding Support of Game Engines",
        author: "Lukas Schreiner and Sebastian von Mammen"
      },
      {
        title: "Web-based Programming for Low-cost Gaming Handhelds",
        author:
          "Michal Moskal, Thomas Ball, Abhijith Chatra, James Devine, Peli de Halleux, Steve Hodges, Shannon Kao, Richard Knoll, Galen Nickel, Jacqueline Russell, Joey Wunderlich and Daryl Zuniga"
      },
      {
        title:
          "Crowning Achievements: A historioludic analysis of the achievement metagame in historical simulation games",
        author: "Kirk Lundblade"
      }
    ]
  },
  {
    time: "15:00",
    type: "papers",
    title:
      "Papers: Game Analytics and Visualization / Game Criticism and Analysis",
    zoom: "94641002080",
    presentations: [
      {
        title:
          "Heterogeneous Effects of Software Patches in a Multiplayer Online Battle Arena Game",
        author:
          "Yuzi He, Christopher Tran, Julie Jiang, Keith Burghardt, Emilio Ferrara, Elena Zheleva and Kristina Lerman"
      },
      {
        title:
          "Investigating Match Performance Differences between Genders of League of Legends Champions",
        author: "Ivan Ramler, Choong-Soo Lee and Sarah Strong"
      },
      {
        title:
          "Playing between Opposite Ideologies with Focalization and Agency: A Look at Ideological Perspective in Narrative-driven Games",
        author: "Huaxin Wei and Teresa H. M. Leung"
      }
    ]
  },
  {
    time: "16:00",
    type: "sponsored",
    title: "Sponsored Talk",
    author: "Zynga",
    zoom: "93321151833"
  },
  {
    time: "17:00",
    type: "papers",
    title: "Papers: Game Design and Player Experience / Reflections",
    zoom: "91527273250",
    presentations: [
      {
        title: "Game Mechanic Alignment Theory and Discovery",
        author:
          "Michael Green, Ahmed Khalifa, Rodrigo Canaan, Philip Bontrager and Julian Togelius"
      },
      {
        title:
          "Challenging Systems of Play: Towards game design ethics for transgender allyship",
        author: "Josephine Baird and Sabine Harrer"
      },
      {
        title: "Adversarial Random Forest Classifier for Automated Game Design",
        author: "Thomas Maurer and Matthew Guzdial"
      }
    ]
  },
  {
    time: "18:00",
    type: "general",
    title: "Paper and Competition Awards",
    zoom: "96544641933"
  },
  {
    time: "19:00",
    type: "general",
    title: "Closing Remarks",
    zoom: "99742166922"
  }
];

module.exports = { workshopDay, day1, day2, day3, day4 };
