import { InlineCode } from "@/once-ui/components";
import { GoRocket } from "react-icons/go";
import { SiSolidity, SiHardhat, SiChainlink, SiOpenzeppelin } from 'react-icons/si';
import { LuHardHat } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Mieux : utiliser les icones de react-icons
import { MdEmail } from "react-icons/md";


const person = {
  firstName: "Milo",
  lastName: "Sottilini",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web3 Blockchain Developer",
  avatar: "/images/milo.png", // Assure-toi que ce chemin est correct
  location: "America/Sao_Paulo", //  IANA time zone
  languages: ["English", "French", "Spanish", "Portuguese"], // optional
  subline: (
    <>
      Building decentralized solutions at the intersection of fitness and finance.
      <br />
      <span className="inline-flex items-center gap-2 mt-3 text-sm bg-gray-800 px-3 py-1 rounded-full">
        <GoRocket className="w-4 h-4" /> Open to Web3 Opportunities
      </span>
    </>
  ),
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.  (J'ai gardé la description de Selene, elle est bien)
    </>
  ),
};

const social = [
  // Utilisation de react-icons pour une meilleure cohérence
  {
    name: "GitHub",
    icon: FaGithub, // Utilisation de l'icône FaGithub
    link: "https://github.com/Milo9869/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin, // Utilisation de l'icône FaLinkedin
    link: "https://www.linkedin.com/in/milo-sottilini-47219823b/",
  },
  {
    name: "X",
    icon: FaTwitter, // Utilisation de l'icône FaTwitter
    link: "", //  À compléter si tu as un compte X
  },
  {
    name: "Email",
    icon: MdEmail, // Utilisation de l'icône MdEmail (plus cohérent avec react-icons)
    link: "mailto:milo.sottilini@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web3 Developer</>,
  subline: (
    <>
      I'm Milo, an entrepreneur web3 developer, where I try to apply the web3 into the real-world.
      <br /> I build an application on my own, a solution end-to-end.
    </>
  ),
};

const about = {
  label: "About",
  title: "Technical Profile", // Gardé le titre de Milo
  description: `
  Full-stack developer with 2+ years of experience building web applications and smart contracts.
  Specialized in TypeScript ecosystems with strong focus on code quality and system architecture.
  Currently seeking remote opportunities in blockchain development.
`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", //  À compléter si tu as un lien Calendly
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Building decentralized solutions at the intersection of fitness and finance.
      <br />
      <span className="inline-flex items-center gap-2 mt-3 text-sm bg-gray-800 px-3 py-1 rounded-full">
        <GoRocket className="w-4 h-4" /> Open to Web3 Opportunities
      </span>
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Stealth Blockchain Startup",
        timeframe: "2024 - Present",
        role: "Founder & Lead Developer",
        achievements: [
          <>
            Designed tokenomics model combining <InlineCode>ERC-20</InlineCode> utility tokens with
            <InlineCode>ERC-1155</InlineCode> NFTs for gamified mechanics
          </>,
          <>
            Implemented Merkle-proof claim system handling {">"}50k daily transactions using
            <InlineCode>@openzeppelin/merkle-tree</InlineCode>
          </>,
          <>
            Architected hybrid infrastructure with <InlineCode>IPFS</InlineCode> for decentralized storage
            and <InlineCode>Supabase</InlineCode> for real-time analytics
          </>
        ],
        techStack: [
          "Next.js 14",
          "Solidity 0.8",
          "The Graph Protocol",
          "Chainlink Automation"
        ],
      },
      {
        company: "BMC Software",
        timeframe: "2023 - Present",
        role: "Software Consultant",
        achievements: [
          <>
           <strong className="achievement-title">Client Needs & Solution Design: </strong>
           Analyze client requirements and design tailored solutions using BMC tools, aligning technical capabilities
           with business goals—skills I leverage to create user-focused blockchain applications.
  </>,
          <>
           <strong className="achievement-title">Implementation & Integration: </strong>
            Deploy and integrate BMC software (e.g., BMC Helix, Control-M) into diverse systems,
            a process akin to building and connecting blockchain smart contracts with front-end and back-end stacks.
          </>,
          <>
          <strong className="achievement-title">Technical Expertise: </strong>
          Apply knowledge of cloud platforms, automation, and scripting (e.g., Python) to optimize solutions—expertise
          I adapt to develop secure, scalable blockchain systems using tools like Solidity and Node.js.
        </>,
        <>
        <strong className="achievement-title">Problem-Solving & Optimization: </strong>
        Troubleshoot issues and enhance performance.
        </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "EAE Business School - Madrid",
        description: <>Master in Data Science for Finance.</>,
      },
      {
        name: "University of Lyon 2",
        description: <>Bachelor of Economics.</>,
      },
      {
        name: "University of Lyon 2",
        description: <>Bachelor of Political Sciences & Bachelor of Sociology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web3 Stack",
        description: (
          <>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <SiSolidity className="w-4 h-4" />
              <LuHardHat className="w-4 h-4" />
              <SiOpenzeppelin className="w-4 h-4" />
              <SiChainlink className="w-4 h-4" />
            </div>
            Specialized in DeFi primitives development and gas optimization techniques
          </>
        ),
        images: [/*...*/] //  Tu peux ajouter des images ici si tu veux
      },
      {
        title: "Blockchain development",
        description: <>I'm proficient in Solidity and have experience developing and deploying smart contracts for various
         use cases, including token creation, decentralized finance (DeFi) mechanisms, and NFT marketplaces.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend development",
        description: <>I'm skilled in React and have experience building complex and interactive user interfaces
        with a focus on UX and performance.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend development",
        description: <>I have experience designing and implementing robust and scalable backend systems using Node.js
        and related frameworks.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DataBase Management",
        description: <>I'm proficient in PostgreSQL and have experience with data modeling, schema design,
        and database migrations.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Testing and Quality Assurance",
        description: <>I'm a strong advocate for testing and have experience writing unit tests, integration tests,
        and end-to-end tests to ensure the quality and reliability of my code.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps Infrastructure",
        description: <>I have experience with Docker for containerization, CI/CD pipelines for automation,
        and cloud platforms for deployment and scaling.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
        {
          title: "Next.js",
          description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        images: [],
        },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };