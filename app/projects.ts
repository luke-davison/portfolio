export interface Project {
  slug: string;
  image: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  url: string | string[];
  sourceUrl: string | string[];
  notes: string[];
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    image: "/portfolio-portfolio.png",
    title: "This site",
    date: "August 2023",
    description: "A gallery for my various projects and tinkerings",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    url: "",
    sourceUrl: "https://github.com/luke-davison/portfolio",
    notes: []
  },
  {
    slug: "countdown-solver",
    image: "/portfolio-countdown.png",
    title: "Countdown number game solver",
    date: "August 2023",
    description: "I challenged myself to build a solver for this game",
    tech: ["Angular", "TypeScript"],
    url: "https://luke-davison.github.io/countdown-solver/",
    sourceUrl: "https://github.com/luke-davison/countdown-solver",
    notes: [
      "I like the numbers challenge in the British TV show Countdown.  After playing a version of it on my phone for a while I began to wonder how easy it would be to write an algorithm to solve it.  As suspected, it was reasonably easy.  The hard part was writing the code in an understandable and tidy way.",
      "But a solver isn't much use without a UI so I decided to put my knowledge of Angular to the test.  It's not pretty, but it works."
    ]
  },
  {
    slug: "travel-blog",
    image: "/portfolio-travel-blog.png",
    title: "A travel blog built with Gatsby",
    date: "April 2023",
    description: "A travel blog built with Gatsby",
    tech: ["Gatsby", "TypeScript", "React", "GraphQL", "CSS", "MDX"],
    url: "https://luke-and-betty-blog.netlify.app/",
    sourceUrl: "https://github.com/luke-davison/gatsby-blog",
    notes: [
      "My family has a tradition of writing travel blogs so that everyone back home knows what they get up to.  I don't care that much to follow tradition, but I quickly realise that a blog was a perfect way to immortalise holiday memories.  Originally I wrote them using free wordpress.com sites, but I decided that I wanted a solution where I could keep them all in one place (without having to pay wordpress) and also ensure they are backed up so they can't be lost."
    ]
  },
  {
    slug: "keto-calculator",
    image: "/portfolio-keto-calculator.png",
    title: "Keto Calculator",
    date: "February 2023",
    description: "An app to calculate protein/carb/fat ratios",
    tech: ["React", "TypeScript", "CSS"],
    url: "https://luke-davison.github.io/keto-calculator/",
    sourceUrl: "https://github.com/luke-davison/keto-calculator",
    notes: [
      "A friend of mine had their child diagnosed with a disability.  To lessen the symptoms it was recommended they be put on a high fat diet.  They were provided with an excel spreadsheet to help them calculate the right ratio of fat to carbs and protein.  Most keto calculators we could find were for people dieting so I developed an app which could do the calculating for them."
    ]
  },
  {
    slug: "word-game",
    image: "/portfolio-word-game.png",
    title: "Unnamed Word Game",
    date: "2022",
    description: "A word game not too similar or dissimilar from Wordle",
    tech: ["React, TypeScript", "Node", "Express", "CSS"],
    url: "https://lettermonger.onrender.com",
    sourceUrl: "https://github.com/luke-davison/new-word-game",
    notes: [
      "In 2019 I was inspired by the success of Wordle to create my own daily word game.  It is similar to a single turn in scrabble, except each tile scores differently based on factors such as where it is in the word, what other letters are nearby etc.  I was quite happy with how fun the game ended up being, but I was not able to find a way to make it look good on a phone in portrait orientation."
    ]
  },
  {
    slug: "geocache-puzzles",
    image: "/portfolio-solitaire.png",
    title: "Geocache puzzles",
    date: "June 2018",
    description: "Some puzzles I made for the geocaching community",
    tech: ["JavaScript", "CSS", "React", "Node", "Express"],
    url: [
      "https://kaygeedee-solitaire.onrender.com/",
      "https://kaygeedee-minesweeper.onrender.com/"
    ],
    sourceUrl: [
      "https://github.com/luke-davison/solitaire-game-frontend",
      "https://github.com/luke-davison/solitaire-game",
      "https://github.com/luke-davison/geocache-minesweeper"
    ],
    notes: [
      "Dad is a big geocacher and he asked me to create a minesweeper game (with a twist) that he could give to people to challenge them.  It was made in a short period of time while I was unemployed and so its not much to look at.  Originally this project had a database, but for simplicity it was removed when I had problems with my previous hosting provider.",
      "Following the success of minesweeper, Dad asked me to create a solitaire puzzle (with another twist) that he could use for geocaching.  This time I put more effort into it.  Not only can it be played on a touch screen, it actually has graphics.  Unfortunately the twist we came up with wasn't as good as the minesweeper one."
    ]
  },
  {
    slug: "city-sim",
    image: "/portfolio-city-sim.png",
    title: "City Sim",
    date: "May 2017",
    description: "A basic traffic simulation in an isometric city",
    tech: ["JavaScript"],
    url: "https://luke-davison.github.io/city-sim/",
    sourceUrl: "https://github.com/luke-davison/city-sim",
    notes: []
  },
  {
    slug: "maze-drawer",
    image: "/portfolio-maze-drawer.png",
    title: "Maze drawer",
    date: "August 2017",
    description: "Simple widget that draws a maze",
    tech: ["JavaScript", "HTML Canvas"],
    url: "https://luke-davison.github.io/maze-drawer/",
    sourceUrl: "https://github.com/luke-davison/maze-drawer",
    notes: []
  }
];
