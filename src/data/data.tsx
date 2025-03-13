import {AcademicCapIcon, ArrowDownTrayIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Lukas Augustynowicz`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a recent 2025 <strong className="text-stone-100">Computer Science graduate</strong> from the University of
        Toronto.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in <strong className="text-stone-100">Software Engineering</strong> with exposure to various fields
        such as <strong className="text-stone-100">Web3 Blockchain</strong>,
        <strong className="text-stone-100">Artifical Intelligence</strong>,{' '}
        <strong className="text-stone-100">Machine Learning</strong>, and{' '}
        <strong className="text-stone-100">Computer Graphics</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/files/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `I'm a passionate and driven full-stack developer with an interest in latest tech trends. I enjoy researching
  blockchain, Web3, and computer graphics. Outside of work, I play basketball, hockey, and go skiing.`,
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Nationality', text: 'Canadian / Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Skiing, Travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Toronto', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Polish',
        level: 4,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'C',
        level: 10,
      },
      {
        name: 'SQL',
        level: 10,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'C#',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Git',
        level: 10,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'AppDynamic',
        level: 7,
      },
      {
        name: 'Jenkins',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2025',
    location: 'University of Toronto',
    title: 'Bachelors of Science, Compute Science',
    content: (
      <p>
        CSCC73 Algorithm Design and Analysis <br></br>
        CSCC63 Computability and Computational Complexity <br></br>
        CSCC69 Operating Systems <br></br>
        CSCD27 Computer and Network Security <br></br>
        CSCD18 Computer Graphics <br></br>
        CSCD58 Computer Networks <br></br>
        CSCD84 Artifical Intelligence <br></br>
        CSCD25 Advanced Data Science <br></br>
        CSCD43 Database System Technology <br></br>
        CSCC11 Introduction to Machine Learning and Data Mining <br></br>
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 - April 2024',
    location: 'PointClickCare',
    title: 'Applications Operations Engineer',
    content: (
      <p>
        Enhanced ETL automation for alerting customers during messaging service outages, achieving a 200% reduction in
        runtime, resulting in faster response times and improved customer satsifaction. <br></br>
        <br></br>
        Created comprehensive documentation for an ETL pipeline using MsSQL and SSIS, detailing data extraction,
        transformation, loading processes, and ensuring clarity for collaboration and future reference. <br></br>
        <br></br>
        Investigated root cause of log noise resulting in a 20% decrease of superfluous logs, increased detectability
        and system stability. <br></br>
        <br></br>
        Utilized AppDynamics to monitor API health and system performance, identifying potential bottlenecks and
        ensuring optimal service availability and efficiency. <br></br>
        <br></br>
        Converted user requirements into detailed technical specifications, ensuring alignment between business needs
        and technical execution.
      </p>
    ),
  },
  {
    date: 'May 2022 - December 2022',
    location: 'taq Automotive Intelligence',
    title: 'Full-Stack Developer',
    content: (
      <p>
        Collaborated closely with diverse teams to develop and deploy web applications written in Angular, C#, and
        MSSQL. <br></br>
        <br></br>
        Presented product features to product teams and facilitated discussions on development progress to ensure
        requirements were met. <br></br>
        <br></br>
        Implemented features into existing RESTful APIs using SOLID and OOP principles, accompanied by comprehensive
        testing procedures.<br></br>
        <br></br>
        Engaged in code reviews, deployments, and played a pivotal role in developing solutions for critical challenges
        that emerged while following the software development life cycle.<br></br>
        <br></br>
        Participated in on-call deployments, performing post-deployment verifications and troubleshooting to ensure
        seamless application performance and resolve issues promptly.<br></br>
        <br></br>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AugustynowiczL'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lukas-augustynowicz/'},
];
