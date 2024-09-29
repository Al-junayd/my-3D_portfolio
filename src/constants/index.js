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
  mvpProject,
  strablLogo,
  strablProject,
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
    title: "Frontend Development",
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
    date: "September 2022 - Present",
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
    name: "Mainviews Properties",
    description:
      "Mainviews Properties is a leading real estate company, dedicated to delivering exceptional solutions to buyers and sellers",
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
      ,
    ],
    demo: "https://www.mainviewsproperties.com/",
    image: mvpProject,
    source_code_link: "#",
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
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
