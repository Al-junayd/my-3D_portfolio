import {
  creator,
  lusters,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  portfolio,
  ai,
  mui,
  next,
  misty,
  mvp,
  git,
  figma,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
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
    name: "Next.js",
    icon: next,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  ,
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Mainviews Properties Ltd, United Kingdom",
    icon: mvp,
    iconBg: "#ffffff",
    date: "September 2022 - Present",
    points: [
      "Accomplished the development of a comprehensive real estate website with full functionalities, including property search, advanced filters, and Google Maps integration.",
      "Increased user engagement and satisfaction by optimizing website performance, resulting in a 30% decrease in page load time.",
      "Quantified user satisfaction through survey ratings, where the average score increased from 3.8 to 4.6 out of 5.",
      "Designed and implemented an intuitive Construction Management System tailored to the company's needs, streamlining project management and communication.",
      "- Utilized modern web technologies, such as Nextjs and Redux toolkit, to build a real-time communication platform between project managers and construction teams.",
      " - Reduced project delays by 20% by tracking project milestones and issues in real-time, minimizing communication gaps.",
      "Stayed updated with the latest industry trends and emerging technologies to continuously improve skills and contribute toinnovative projects",
      "Achieved a 35% boost in lead generation and conversion rates through advanced property search filters and implemented with Elasticsearch to power the search functionality, enabling users to find properties based on specific criteria efficiently.",
      "Ensured excellent user experience and mobile-friendliness, leading to a 40% increase in mobile traffic and better Google search rankings.",
    ],
  },
  {
    title: "Frontend Developer(Intern)",
    company_name: "MistyArts",
    icon: misty,
    iconBg: "#ffffff",
    date: "July 2022 - November 2022",
    points: [
      "Developed and deployed a responsive web application using HTML, CSS, and JavaScript, which significantly improved user engagement and achieved a 20% increase in website traffic.",
      "Implemented efficient coding practices, resulting in a 15% reduction in page load time and enhancing the overall user experience",
      "Assisted in the development, testing, and maintenance of web applications using HTML, CSS, and JavaScript, ensuring high-quality and efficient code.",
      "Collaborated with cross-functional teams, including designers and backend developers, to gather requirements and design user interfaces that met client needs and provided a seamless user experience.",
      "Implemented responsive web design principles, optimizing applications to render well on different devices and screen sizes",
      "Debugged and troubleshooted frontend issues, identifying and resolving bugs to ensure optimal performance and usability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdulllah proved me wrong.",
    name: "Mustafa Oladepo",
    designation: "CEO,",
    company: "MistyArts",
  },
  {
    testimonial:
      "Abdullah is a very good developer with indepth knowledge in different Frontend technologies technologies. I, as a Product Designer, have worked with him on different projects and his expertise in developing perfect and neat UIs have helped in bringing my designs to life.",
    name: "Adebayo Abdulquadri",
    designation: "UI/UX Designer,",
    company: "Mainviews Properties",
  },
];

const projects = [
  {
    name: "Lusters Ecommerce",
    description:
      "Lusters Ecommerce web app is an online platform that enables businesses to sell products or services to customers over the internet. It serves as a virtual store where customers can browse through a wide range of products, add them to a cart, and make purchases securely(by virtue of stripe integration).",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Stripe Payment gateway",
        color: "pink-text-gradient",
      },
      {
        name: "useContext API",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      ,
    ],
    demo: "https://lusters-ecommerce-admin.vercel.app/",
    image: lusters,
    source_code_link: "https://github.com/Al-junayd/lusters_ecommerce",
  },
  {
    name: "AI article summarizer",
    description:
      "The AI Article Summarizer is a web app using OpenAI's technology to summarize articles from provided links. It features link storage with LocalStorage for easy access, click-to-summarize functionality, and clipboard integration. Users can quickly obtain concise summaries, enhancing productivity and organization.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    demo: "https://ai-summarizer1.netlify.app/",
    image: ai,
    source_code_link: "https://github.com/Al-junayd/ai-summarizer",
  },
  {
    name: "3D portfolio",
    description:
      "This 3D Portfolio showcases a captivating collection of intricate and diverse 3D artworks, highlighting the my skills and creativity. Through a user-friendly interface, visitors can explore stunning 3D models and animations, offering potential clients and enthusiasts a glimpse into my talent.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    demo: "#",
    image: portfolio,
    source_code_link: "https://github.com/Al-junayd/my-3D_portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
