import {
  abetilogo,
  ai,
  cicd,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  llm,
  lusters,
  misty,
  mui,
  mvp,
  mvpProject,
  nestjs,
  next,
  nodejs,
  openai,
  portfolio,
  prepify,
  python,
  RabehLogo,
  reactjs,
  redux,
  spark,
  strablLogo,
  strablProject,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend development",
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
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "CI/CD",
    icon: cicd,
  },
  {
    name: "spark",
    icon: spark,
  },
  {
    name: "LLM",
    icon: llm,
  },
  {
    name: "Open AI",
    icon: openai,
  },
  ,
];

const experiences = [
  {
    title: "Senior Frontend Engineer (contract)",
    company_name: "RABEH, Saudi Arabia",
    icon: RabehLogo,
    iconBg: "#ffffff",
    date: "December 2024 - February 2025",
    points: [
      "Developed a secure authentication system, integrating OAuth, multi-factor authentication (MFA), and role-based access control (RBAC), improving security by 60%",
      "Led the frontend architecture and development of a scalable investment and crowdfunding platform, ensuring high performance and modular design.",
      "Implemented internationalization (i18n) to support multiple languages, enhancing accessibility for investors across the MENA region.",
      "Integrated a multi-currency payment gateway, enabling seamless transactions across multiple regions, increasing user adoption by 40 %.",
      "Collaborated with backend and DevOps teams, leveraging Docker and CI/CD pipelines to streamline deployment workflows",
    ],
  },
  {
    title: "Backend Engineer (contract)",
    company_name: "Lagos, Nigeria",
    icon: abetiLogo,
    iconBg: "#ffffff",
    date: "April 2024 - December 2024",
    points: [
      "Built an automated audiobook pipeline using Azure and Python, streamlining conversion, stitching, and compression, cutting processing time by 70%.",
      "Engineered a data pipeline for HR analytics using Python and SQL, tracking employee retention and growth, improving workforce planning by 30%.",
      "Enhanced audiobook playback using Python and Celery, enabling bookmarks, progress tracking, and seamless resumption, boosting user engagement.",
      "Integrated Paystack for secure payments, ensuring seamless transactions for audiobooks and HR subscriptions.",
      "Collaborated with DevOps teams, streamlining deployment using Docker and CI/CD pipelines for scalable infrastructure management.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "STRABL, UAE",
    icon: strablLogo,
    iconBg: "#ffffff",
    date: "September 2023 - September 2024",
    points: [
      "Zero Pay Checkout: Developed zero-payment checkout using Stripe and Tap Payment, allowing product delivery without upfront payment, increasing satisfaction by 20% and lead conversion by 15% for over 10,000 customers.",
      "Payment Methods Integration: Enhanced merchant flexibility by integrating multiple payment methods with Stripe, leading to a 30% increase in successful transactions and a 25% boost in sales potential for 2,000+ merchants.",
      "Implemented responsive design principles and optimized web performance, resulting in a 20% reduction in bounce rates and improved page load times.",
      "Multi-currency: integrated multi-currency support, and decreased checkout abandonment rates by 25%.",
      " Upgraded security protocols, leading to a 50% reduction in payment fraud incidents and adherence to PCI-DSS requirements.",
      "Feature Flag System: Enabled feature toggling for merchants, increasing platform engagement and satisfaction by 15% for 1,500+ users.",
      "WebAuthn Integration: Streamlined the merchant onboarding process with WebAuthn, reducing onboarding time by 25% and increasing completion rates by 20% for 1,000+ merchants.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Mainviews Properties Ltd",
    icon: mvp,
    iconBg: "#ffffff",
    date: "July 2021 - PreSeptember 2023sent",
    points: [
      "Construction Management System: Developed a robust CMS for real-time project tracking, cost monitoring, and task management using JavaScript, Tailwind, and Next.js, cutting project delays by 25%.",
      "Real Estate Platform: Engineered a property search and filter system with Google Maps integration, driving a 35% boost in lead generation.",
      "Project Progress Tracking: Implemented live project progress updates through media (images/videos) for construction transparency and accountability.",
      "Core Features: Integrated key functionalities like task review, cost monitoring, and receipts management for seamless project execution.",
      "Collaborated with cross-functional teams to gather requirements, design user interfaces, and ensure project success.",
      "Conducted code reviews, identified bugs, and optimized code for performance and efficiency.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "MistyArts",
    icon: misty,
    iconBg: "#ffffff",
    date: "February 2021 - July 2021",
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
      "What sets Abdullah apart is his exceptional work ethic and problem-solving abilities. He approaches challenges with a creative mindset and consistently delivers high-quality results. He’s a reliable and collaborative team member, always willing to go the extra mile to ensure project success. Abdullah’s contributions have been instrumental in STRABL. His dedication to excellence is an asset to any team, and I have no doubt that he will continue to excel in his future endeavors.",
    name: "Murtaza Khursheed",
    designation: "CTO/Co-founder,",
    company: "STRABL",
  },
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
    name: "Rabeh Crowdfunding Platform",
    description:
      "A cutting-edge platform for Crowdfunding, Crowd-investing, and an Exchange that leverages advanced technologies to connect entrepreneurs and investors.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react-vite",
        color: "green-text-gradient",
      },
      {
        name: "React query",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Zod",
        color: "blue-text-gradient",
      },
      ,
    ],
    demo: "https://rabeh.sa/",
    image: RabehLogo,
    source_code_link: "",
  },
  {
    name: "Prepify AI",
    description:
      "An AI-powered platform for preparing for mock interviews built on VAPI AI agents",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "pink-text-gradient",
      },
      {
        name: "VAPI AI Agents",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      ,
    ],
    demo: "https://prepify-ai-interviewer.vercel.app/",
    image: prepify,
    source_code_link: "https://github.com/Al-junayd/prepify-ai-interviewer",
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
    demo: "https://openai-summarizer1.netlify.app/",
    image: ai,
    source_code_link: "https://github.com/Al-junayd/ai-summarizer",
  },

  {
    name: "STRABL",
    description:
      "STRABL is MENA 1st supercharged end-to-end payments and checkout solution that democratizes digital payments",
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
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "StoryBook",
        color: "pink-text-gradient",
      },
      ,
    ],
    demo: "https://www.strabl.io",
    image: strablProject,
    source_code_link: "#",
  },
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
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
