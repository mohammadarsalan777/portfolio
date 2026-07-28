import {
  FiCode,
  FiServer,
  FiShare2,
  FiLayers,
  FiZap,
  FiTool,
} from 'react-icons/fi'

export const services = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Responsive, accessible interfaces built with React and Tailwind that feel fast and intentional.',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'Reliable Node.js and Express services with clean architecture and sensible error handling.',
  },
  {
    icon: FiShare2,
    title: 'REST API Development',
    description: 'Well-documented, secure APIs designed to scale with your product, not against it.',
  },
  {
    icon: FiLayers,
    title: 'Full Stack MERN Development',
    description: 'End-to-end product builds — from schema design to deployed UI — under one roof.',
  },
  {
    icon: FiZap,
    title: 'Website Optimization',
    description: 'Performance audits and fixes that cut load times and improve Core Web Vitals.',
  },
  {
    icon: FiTool,
    title: 'Bug Fixing',
    description: 'Fast, methodical debugging to get flaky features and broken flows working again.',
  },
]

export const experience = [

  {
    role: 'Full Stack Developer',
    company: 'Nass Technologies',
    period: '2023 — 2025',
    points: [
      'Developed MERN applications used by real production teams',
      'Built REST APIs powering multiple client-facing products',
      'Designed responsive UI systems shared across projects',
      'Worked with MongoDB for scalable schema design',
      'Integrated secure authentication and authorization flows',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Verzeo',
    period: '2022 — 2023',
    points: [
      'Completed hands-on training in Machine Learning using Python',
      'Performed Exploratory Data Analysis (EDA) on real-world datasets',
      'Built predictive models using Scikit-learn and Pandas',
      'Developed a Banking Behavioral Scorecard as the major project',
      'Applied data preprocessing, feature engineering, and model evaluation techniques',
    ],
  },
]

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Product Manager, Finlytics',
    quote:
      'Arsalan turned a vague brief into a polished product in weeks. Communication was clear at every step and the code quality made our team faster.',
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'David Chen',
    role: 'Founder, Loopstack',
    quote:
      'Our dashboard went from clunky to genuinely enjoyable to use. He caught edge cases we hadn\u2019t even thought about.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Ananya Verma',
    role: 'CTO, Bright Learn',
    quote:
      'Reliable, fast, and thoughtful about tradeoffs. The API he built has handled our growth without a single rewrite.',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
]

export const certificates = [
  { title: 'Full Stack Web Development', issuer: 'Nass Technologies', year: '2023' },
  { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2022' },
  { title: 'React — Advanced Concepts', issuer: 'Udemy', year: '2024' },
  { title: "Machine Learning with Python", issuer: "Verzeo", year: "2023" },
]

export const stats = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects', value: 10, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'Responsive', value: 100, suffix: '%' },
]

export const aboutCards = [
  { label: 'Experience', value: '2+ Years' },
  { label: 'Projects', value: '10+ Built' },
  { label: 'Technologies', value: '10+ Tools' },
  { label: 'Location', value: 'India' },
]
