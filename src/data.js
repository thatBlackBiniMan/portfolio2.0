//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiLinkedin
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects2/p6.jpeg';
import Project2 from './assets/img/projects2/p2.png';
import Project3 from './assets/img/projects2/p4.jpg';
import Project4 from './assets/img/projects2/p3.jpg';
import Project5 from './assets/img/projects2/p5.png';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'me',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonial',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/drsolomonomoruyi/',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/DrOmoruyi',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/thatBlackBiniMan',
  },
  {
    icon: <FiInstagram/>,
    href: 'https://instagrame.com/dromoruyi',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: 'https://freelancer.com/',
  },
  {
    img: UpworkBrandIcon,
    href: 'https://upwork.com/',
  },
  {
    img: FiverBrandIcon,
    href: 'https://fiver.com/',
  },
  {
    img: BehanceBrandIcon,
    href: 'https://behance.com/',
  },
  {
    img: DribbbleBrandIcon,
    href: 'https://dribble.com/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Escrow Payment Smart contracts',
    category: 'Blockchain Applications',
  },
  {
    id: '2',
    image: Project2,
    name: 'My Blogsite',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'NFT Marketplace',
    category: 'Blockchain Applications',
  },
  {
    id: '4',
    image: Project4,
    name: 'Ebook website',
    category: 'Ebooks & Articles',
  },
  {
    id: '5',
    image: Project5,
    name: 'NFT Minting app',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'Crowdfunding App',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web development',
  },
  {
    name: 'Blockchain Applications',
  },
  {
    name: 'Ebooks & Articles',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Telemedicine',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'SEO Articles & Research',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'Blockchain Software',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at solomonomoruyi66@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Benin City, Nigeria',
    description: 'Serving clients worldwide',
  },
];
