import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  one,
  two,
  three,
  gemini,
  letter,
  tips,
  Job_search,
  week12
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Gemini AI",
    icon: web,
  },
  {
    title: "Customize for Each Role    ",
    icon: mobile,
  },
  {
    title: "24/7 support",
    icon: backend,
  },
  {
    title: "Save Time, Apply More ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html ",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const CoverLetters = [
  {
    title: "Provide Your Background    ",
    icon: one,
    iconBg: "#383E56",
    points: [
      "Fill in your personal details. This includes your name, contact information, and any professional identifiers",
    ],
  },
  {
    title: "State Your Desired Position    ",
    icon: two,
    iconBg: "#E6DEDD",
    points: [
      "Let us know the company name and job title that you are applying to, to customize the cover letter",
    ],
  },
  {
    title: "Pinpoint Your Strengths    ",
    icon: three,
    iconBg: "#383E56",
    points: [
      "To ensure your application stands out, focus on selecting your top three skills that are most relevant to the job you're applying for",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This platform is an excellent resource for anyone serious about getting noticed",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      " The interface is super user-friendly, and I loved the ability to customize everything to fit my experience. Highly recommend!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " The step-by-step guidance helped me craft a resume that truly highlights my skills. I landed my dream job within weeks!",
    name: "Lisa Wang",
    designation: "Hiring Manager",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const VideoItems = [
  {
    name: "Searching for a job!",
    description: "Job search guide: Best strategies & platforms",
    tags: [
      {
        name: "video",
        color: "blue-text-gradient",
      },
      {
        name: "job interview",
        color: "green-text-gradient",
      },
      {
        name: "3 min watch",
        color: "pink-text-gradient",
      },
    ],
    image: Job_search,
    source_code_link: "https://www.youtube.com/watch?v=8hQiLt1Sj6E",
  },
  {
    name: "University Applicationsb!",
    description: "University Applications: How to write your cover letter",
    tags: [
      {
        name: "video",
        color: "blue-text-gradient",
      },
      {
        name: "cover letter",
        color: "green-text-gradient",
      },
      {
        name: "2 min watch",
        color: "pink-text-gradient",
      },
    ],
    image: week12,
    source_code_link: "https://www.youtube.com/watch?v=muHBta6-oe8E",
  },
  {
    name: "thank you letter",
    description: "How to write a thank you letter for a job offer",
    tags: [
      {
        name: "Video",
        color: "blue-text-gradient",
      },
      {
        name: "2 min watch",
        color: "green-text-gradient",
      },
    ],
    image: letter,
    source_code_link:
      "https://www.youtube.com/watch?v=ty8tA0-ymPM&feature=youtu.be",
  },
  {
    name: "tips",
    description: "How to write a top engineering resume (+ example)",
    tags: [
      {
        name: "videos",
        color: "blue-text-gradient",
      },
      {
        name: "job interview",
        color: "green-text-gradient",
      },
      {
        name: "3 min watch",
        color: "pink-text-gradient",
      },
    ],
    image: tips,
    source_code_link: "https://www.youtube.com/watch?v=7PrlaHvCwDg",
  },
];

export { services, technologies, CoverLetters, testimonials, VideoItems };
