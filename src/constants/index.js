import { GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';
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
  threejs,
  cryptoverse,
  portfolio,
  youtube,
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
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Development Engineer II',
    company_name: 'Autodesk',
    company_website: 'https://www.autodesk.in/',
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
    company_website: 'https://www.interactivebrokers.com/en/home.php',
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
    company_website: 'https://www.interactivebrokers.com/en/home.php',
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Contributed to Digital Account Management (DAM) Web Service based on Java (JAX-RS), used by registered Investment Advisors and Brokers for account creation/management',
      'Automated process for non-US clients to re-certify their tax form (W8BEN), required by IRS every 3 years',
      'Worked on new features in DAM including native language support for Chinese and Hebrew, creating additional accounts for users, dividend reinvestment election',
      'Tech Stack: J2EE, PL/SQL, Java, Python',
    ],
  },
];

const projects = [
  {
    name: 'Cryptoverse',
    description:
      'Web-based platform that allows users to search about crytocurrency stats, prices, news articles. Cryptoverse provides user interactive charts about price history with different configurations.',
    tags: [
      {
        name: 'react.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'chart.js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'blue-text-gradient',
      },
      {
        name: 'rtk-query',
        color: 'green-text-gradient',
      },
      {
        name: 'ant-design',
        color: 'pink-text-gradient',
      },
    ],
    image: cryptoverse,
    source_code_link: 'https://github.com/shaunak24/cryptoverse-app',
    deployment_link: 'https://cryptoverse-s24.netlify.app/',
  },
  {
    name: 'Developer Portfolio',
    description:
      'My developer portfolio built using React Three Fibre and Tailwind CSS. I have leveraged the power of 3D models to showcase my work as a software developer in a fun and interactive way.',
    tags: [
      {
        name: 'react.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react-three-fibre',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'blue-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/shaunak24/shaunak-dev-portfolio',
    deployment_link: 'https://shaunakt.com/',
  },
  {
    name: 'Youtube Clone',
    description:
      'A video streaming application having features such as search using debouncing, nested comments section, live chat using API polling, related videos, trending videos.',
    tags: [
      {
        name: 'react.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube,
    source_code_link: 'https://github.com/shaunak24/youtube-clone',
    deployment_link: 'https://youtube-appl-clone.netlify.app/',
  },
];

const socialMedia = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/shaunak24/',
    icon: LinkedIn,
  },
  {
    name: 'Github',
    link: 'https://github.com/shaunak24',
    icon: GitHub,
  },
  {
    name: 'Gmail',
    link: 'mailto:shaunak241997@gmail.com',
    icon: Mail,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/shaunakt24',
    icon: Twitter,
  },
];

export { about, services, technologies, experiences, projects, socialMedia };
