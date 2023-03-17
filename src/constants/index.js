import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  java,
  spring_boot,
  pl_sql,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  autodesk,
  interactive_brokers,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: '',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const about = {
  introduction:
    "Hi 👋🏻, As a software developer, I am passionate about creating innovative solutions that make a positive impact on people's lives. I possess 3 years of experience in backend development and have a full range of technical skills, including Java, Spring, Spring Boot, Node.js, React.js, PL/SQL, and MongoDB. I am always eager to learn new things and tackle challenging situations, which is why I love software development. I have successfully driven projects end to end and am always ready to adapt or pivot according to the end goal. My commitment to excellence makes me an asset to any team I join. Let's work together to bring your ideas to life!",
};

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Web Developer',
    icon: web,
  },
  // {
  //   title: 'Content Creator',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Spring Boot',
    icon: spring_boot,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PL/SQL',
    icon: pl_sql,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Development Engineer II',
    company_name: 'Autodesk',
    icon: autodesk,
    iconBg: '#E6DEDD',
    date: 'November 2022 - Present',
    points: [
      'Working as a fullstack developer on Fusion 360 product, an integrated cloud CAD, CAM, CAE, and PCB software platform',
      'Developing "Bill of Materials" capability in Fusion 360 desktop application and web version',
      'Contributed to Universal Data Access (UDA), an initiative to provide a common data experience across various Autodesk products',
      'Collaborating with cross-functional teams including designers, product managers, and other developers',
      'Tech Stack: React.js, Redux.js',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Interactive Brokers',
    icon: interactive_brokers,
    iconBg: '#E6DEDD',
    date: 'July 2020 - Nov 2022',
    points: [
      'Contributed to IB Customer System (IBCUST) involving the process of onboarding customers and related account management functions',
      'Automated process to convert Uniform Gifts to Minors Act (UGMA) accounts to regular trading accounts enabling the Customer Support team to improve overall efficiency and retention rate',
      'Worked on system for classification of Hong Kong customers as Professional Investors based on investment assets outlined by HK Securities and Futures Commission (SFC); helping in targeting new/specialized products such as Cryptocurrencies',
      'Developed account statistics reporting system for IBKR IMPACT App highlighting major events in account lifecycle, providing the IB marketing team insights into App adoption and analysis of product offerings',
      'Implemented data sanity checks for Consolidated Audit Trail (CAT) Customer and Account Information System (CAIS) reporting for FINRA (US Regulator); created time-efficient processes for validating data for 1.7M+ customer accounts',
      'Tech Stack: J2EE, PL/SQL, Java, Python',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Interactive Brokers',
    icon: interactive_brokers,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Contributed to Digital Account Management (DAM) Web Service based on Java (JAX-RS), used by registered Investment Advisors and Brokers for account creation/management',
      'Automated process for non-US clients to re-certify their tax form (W8BEN), required by IRS every 3 years',
      'Worked on new features in DAM including native language support for Chinese and Hebrew, creating additional accounts for users, dividend reinvestment election',
      'Tech Stack: J2EE, PL/SQL, Java, Python',
    ],
  },
  // Example -
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
    deployment_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
    deployment_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    deployment_link: 'https://github.com/',
    source_code_link: 'https://github.com/',
  },
];

export { about, services, technologies, experiences, testimonials, projects };
