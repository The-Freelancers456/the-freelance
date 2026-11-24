import { ProjectData, ServiceData, ProcessStep, WhyChooseItem } from '../types'

export const brandConfig = {
  name: 'THE FREELANCE',
  tagline: 'Ideas • Technology • Development • Research',
  positioning:
    'We transform ideas into practical technology solutions through software development, AI, research, engineering, and innovative project development.',
  email: 'thefreelancers456@gmail.com',
  phone: '9080234590',
  formattedPhone: '+91 90802 34590',
  whatsappUrl: 'https://wa.me/919080234590?text=Hi%20THE%20FREELANCE%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  githubUrl: 'https://github.com/The-Freelancers456',
  workingHours: 'Mon – Sat: 9:00 AM – 9:00 PM IST',
  location: 'Tamil Nadu & Remote Global',
}

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Featured Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export const corePillars = [
  {
    step: '01',
    title: 'Idea Conceptualization',
    desc: 'Translating abstract problem statements or ambitious visions into structured, technically viable architectural blueprints.',
  },
  {
    step: '02',
    title: 'Technology Selection',
    desc: 'Handpicking optimal modern frameworks, databases, and AI models for long-term scalability and rock-solid performance.',
  },
  {
    step: '03',
    title: 'Architecture & Planning',
    desc: 'Drafting modular schemas, API specifications, component hierarchies, and secure data pipelines before writing code.',
  },
  {
    step: '04',
    title: 'Development & Implementation',
    desc: 'High-velocity, clean-code engineering with TypeScript, modern frameworks, and robust backend integrations.',
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    desc: 'Rigorous cross-device testing, Lighthouse audits, code refactoring, and responsiveness verification down to 60fps.',
  },
  {
    step: '06',
    title: 'Documentation & Delivery',
    desc: 'Complete source code transfer, IEEE-compliant papers, presentation slide decks, and zero-headache deployment walkthroughs.',
  },
]

export const servicesData: ServiceData[] = [
  {
    id: 'ai-ml',
    number: '01',
    title: 'AI & Machine Learning Development',
    shortDesc: 'Production-ready artificial intelligence, intelligent data pipelines, predictive models, and deep learning implementations.',
    fullDesc:
      'We design and deploy practical AI and Machine Learning models tailored to real-world datasets. From computer vision classification and natural language parsing to custom neural network architectures and autonomous automation systems.',
    features: [
      'AI-powered full-stack applications',
      'Machine learning predictive models & classifiers',
      'Intelligent workflow automation & bots',
      'Data-driven systems & analytical engines',
      'Computer Vision, OpenCV & NLP integration',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'FastAPI', 'Pandas', 'NumPy'],
    iconName: 'Cpu',
    accentColor: 'orange',
    targetAudience: 'Startups, Final-year AI/ML students & businesses needing smart data pipelines',
  },
  {
    id: 'software-dev',
    number: '02',
    title: 'Software Development',
    shortDesc: 'Custom software applications engineered for stability, high throughput, robust security, and seamless database architectures.',
    fullDesc:
      'End-to-end custom software solutions crafted with high architectural standards. We build desktop software, modular web apps, microservices, and unified backend platforms with relational and NoSQL database integrations.',
    features: [
      'Custom software applications & tools',
      'Desktop & web cross-platform solutions',
      'Backend REST & GraphQL API services',
      'Relational & NoSQL database architecture',
      'System optimization & clean architecture',
    ],
    technologies: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'Express', 'Redis'],
    iconName: 'Code2',
    accentColor: 'cyan',
    targetAudience: 'Commercial enterprises, engineers & innovators requiring bespoke software',
  },
  {
    id: 'web-dev',
    number: '03',
    title: 'Web Development',
    shortDesc: 'Bespoke modern websites, interactive web experiences, full-stack web applications, and editorial agency digital showcases.',
    fullDesc:
      'We engineer international-grade web platforms with lightning-fast load times, fluid GSAP motion, modern responsive typography, and full-stack API backends that leave an unforgettable impression.',
    features: [
      'Modern high-performance responsive websites',
      'Editorial creative frontend engineering',
      'Full-stack dynamic applications',
      'Interactive motion experiences & animations',
      'SEO-optimized, accessible web architecture',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite', 'HTML5/CSS3', 'REST APIs'],
    iconName: 'Globe',
    accentColor: 'orange',
    targetAudience: 'Brands, digital agencies, entrepreneurs & students needing web portals',
  },
  {
    id: 'academic-projects',
    number: '04',
    title: 'Final-Year & Academic Projects',
    shortDesc: 'End-to-end working engineering projects, live functioning prototypes, custom implementations, and 1-on-1 technical assistance.',
    fullDesc:
      'Specialized engineering and academic development for final-year students across CSE, IT, AI & Data Science, ECE, and MCA. We deliver 100% genuine working source code with step-by-step technical walkthroughs and viva preparation.',
    features: [
      'Innovative project concepts & domain selection',
      'Full working software & hardware prototypes',
      '100% executable clean source code',
      'Viva voce preparation & architecture breakdown',
      'Technical guidance and live debugging support',
    ],
    technologies: ['Python', 'React', 'Java', 'IoT / NodeMCU', 'Flask/FastAPI', 'Machine Learning', 'Cloud'],
    iconName: 'GraduationCap',
    accentColor: 'cyan',
    targetAudience: 'Final-year engineering, BCA, MCA, B.Tech & M.Tech students',
  },
  {
    id: 'research-ieee',
    number: '05',
    title: 'Research & IEEE Papers',
    shortDesc: 'Publication-standard technical research papers, IEEE conference formatting, comparative algorithm analysis, and literature reviews.',
    fullDesc:
      'Rigorous research methodology, technical writing, and mathematical modeling for IEEE conferences, Scopus-indexed journals, and academic submissions. We ensure thorough literature reviews and verified empirical experiments.',
    features: [
      'IEEE standard 2-column formatting & LaTeX/Overleaf',
      'In-depth literature reviews & problem formulation',
      'Architecture diagrams, algorithm pseudocode & equations',
      'Comparative performance analysis & metric plots',
      'Plagiarism-safe, original technical synthesis',
    ],
    technologies: ['LaTeX', 'Overleaf', 'IEEE Xplore Standards', 'Matplotlib', 'Origin', 'Academic Research'],
    iconName: 'FileText',
    accentColor: 'orange',
    targetAudience: 'Researchers, M.Tech/Ph.D. scholars, and final-year academic teams',
  },
  {
    id: 'documentation-support',
    number: '06',
    title: 'Documentation & Technical Support',
    shortDesc: 'Comprehensive Software Requirement Specifications (SRS), technical reports, viva presentation decks, and direct deployment support.',
    fullDesc:
      'Technical communication made flawless. We craft complete documentation packages that clearly articulate every architectural decision, UML flow, database schema, and deployment step to ensure effortless project defense.',
    features: [
      'Comprehensive Project Reports & SRS documentation',
      'Professional PowerPoint (PPT) presentation decks',
      'UML Class, Sequence, Use-Case & ER diagrams',
      'System installation guides & zero-setup scripts',
      'Ongoing technical support & maintenance',
    ],
    technologies: ['Draw.io', 'Markdown', 'MS PowerPoint', 'UML 2.5', 'Git', 'PDF Architecture Docs'],
    iconName: 'BookOpenCheck',
    accentColor: 'cyan',
    targetAudience: 'Project teams needing complete presentation and submission documentation',
  },
]

export const featuredProjects: ProjectData[] = [
  {
    id: 'rclashers-media',
    title: 'RCLASHERS Media',
    subtitle: 'Influencer Marketing & Talent Management Digital Platform',
    category: 'Commercial Web Platform & Motion Experience',
    year: '2026',
    client: 'RCLASHERS Media (Delhi, India)',
    liveUrl: 'https://rclashers.com',
    githubUrl: 'https://github.com/The-Freelancers456/rclashers-media',
    description:
      "A high-impact, cinematic agency web platform engineered for India's premier influencer marketing and talent management company. Headquartered in Delhi, RCLASHERS Media needed an international-grade digital presence to showcase 450+ delivered brand campaigns, manage over 380 exclusive creators, and drive enterprise brand partnerships.",
    problemStatement:
      'RCLASHERS Media was expanding rapidly but lacked a centralized, high-prestige platform to present their creator network, transparent advance payout model, and multi-tier campaign capabilities. Generic template builders could not handle custom interactive onboarding workflows or the sophisticated editorial aesthetic demanded by top brands like Hotstar, Flipkart, and WinZO.',
    solution:
      'We architected and built a bespoke web platform powered by React 18, TypeScript, Tailwind CSS, and GSAP ScrollTrigger. The solution features custom kinetic typography, a live Delhi IST agency clock, interactive dual-tier marquee displays, and dedicated interactive onboarding portals for both creators and enterprise brands.',
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'GSAP 3',
      'ScrollTrigger',
      'React Router',
      'Lucide Icons',
      'Vite',
    ],
    keyFeatures: [
      'Interactive Creator Application Portal (/join-as-creator) with talent verification',
      'Enterprise Brand Collaboration Gateway (/join-as-brand) with multi-category specs',
      'Dual-tier infinite continuous marquee featuring premier brand partners',
      'Cinematic kinetic typography with GSAP staggered viewport reveals',
      'Performance ROI-driven strategy showcase & CAC attribution models',
      'Real-time Delhi Headquarters clock (HH:MM:SS IST) integrated into the editorial footer',
    ],
    outcome:
      'Successfully deployed in production, providing RCLASHERS Media with an authoritative digital home that handles direct brand inquiries and automates creator onboarding with 100% responsive fluid layouts and zero layout shift.',
    metrics: [
      { label: 'Delivered Campaigns', value: '450+' },
      { label: 'Exclusive Talent', value: '380+' },
      { label: 'Platform Performance', value: '60 FPS' },
      { label: 'Live Status', value: 'Production' },
    ],
    accentColor: 'orange',
    mockupType: 'desktop',
  },
  {
    id: 'stack-studio',
    title: 'Stack Studio',
    subtitle: 'Interactive Creative Agency & Motion Experience Portfolio',
    category: 'Motion Design & Advanced Creative Engineering',
    year: '2026',
    client: 'The Freelancers Demonstration Showcase',
    liveUrl: 'https://demo2-kappa-ten.vercel.app',
    githubUrl: 'https://github.com/The-Freelancers456/demo2',
    description:
      'An award-winning interactive portfolio showcase built to push the boundaries of modern creative frontend engineering. Featuring React 19, Tailwind CSS 4, and GSAP ScrollTrigger orchestration, Stack Studio demonstrates how high-end visual choreography and accessibility can co-exist seamlessly.',
    problemStatement:
      'Creative agency portfolio websites frequently suffer from performance degradation, jerky scroll listeners, and broken layouts on mobile or for users with reduced-motion preferences. The challenge was to deliver bespoke physics, magnetic buttons, and clip-path animations without sacrificing Lighthouse scores.',
    solution:
      'We designed an ultra-responsive architecture where every animation runs through a centralized gsap.matchMedia wrapper (useMotion). We engineered custom mouse physics for magnetic interactive buttons, custom cursor tracking with fine-pointer detection, and hardware-accelerated transforms for instantaneous responsiveness.',
    technologies: [
      'React 19',
      'Tailwind CSS v4',
      'GSAP 3',
      'ScrollTrigger',
      'Vite',
      'JavaScript ESNext',
      'CSS Custom Properties',
      'Vercel Edge',
    ],
    keyFeatures: [
      'Centralized gsap.matchMedia system for seamless cross-breakpoint animation scaling',
      'Bespoke useMagnetic hook delivering smooth spring-physics pointer attraction',
      'Custom cursor follower with dynamic blend modes and hover scale triggers',
      'Zero layout shift (CLS: 0.00) with GPU-accelerated transforms and clip-paths',
      'Built-in prefers-reduced-motion fallback guaranteeing 100% accessibility compliance',
      'Asymmetric editorial grid layouts highlighting creative projects and capabilities',
    ],
    outcome:
      'Deployed on Vercel Edge with a near-perfect 98+ Lighthouse performance score, establishing a gold-standard reference for fluid, high-velocity creative web experiences.',
    metrics: [
      { label: 'Lighthouse Performance', value: '98+' },
      { label: 'Animation Smoothness', value: '60 FPS' },
      { label: 'Layout Shift (CLS)', value: '0.00' },
      { label: 'Vercel Deployment', value: 'Live' },
    ],
    accentColor: 'cyan',
    mockupType: 'desktop',
  },
]

export const developmentProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Requirement Analysis & Problem Discovery',
    description:
      'We initiate every project with a deep-dive analysis. We listen to your vision, examine academic guidelines or business objectives, identify technical constraints, and define the exact problem statement to solve.',
    deliverables: ['Detailed Problem Formulation', 'Requirement Specification', 'Scope Definition'],
    duration: 'Phase 1',
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Architecture, Schemas & Technology Selection',
    description:
      'We formulate a comprehensive technical blueprint. We determine the optimal stack (React/Next.js, Python, PostgreSQL/MongoDB), map database schemas, design API endpoints, and establish project milestones.',
    deliverables: ['System Architecture Diagram', 'Database Schema Plan', 'Tech Stack Matrix'],
    duration: 'Phase 2',
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'UI/UX Interface & Interactive Prototyping',
    description:
      'Great software must be intuitive and visually arresting. We craft modern, responsive interfaces, establish typography scales, design color systems, and create interactive mockups before writing implementation code.',
    deliverables: ['High-Fidelity Wireframes', 'Interactive UI Components', 'Design System'],
    duration: 'Phase 3',
  },
  {
    number: '04',
    title: 'Develop',
    subtitle: 'Clean Code Engineering & Full Integration',
    description:
      'Our core development sprint. We engineer modular, type-safe frontend code, robust backend controllers, AI model training routines, and reliable third-party integrations with strict version control.',
    deliverables: ['Clean Type-Safe Codebase', 'Backend API Endpoints', 'AI/ML Model Pipelines'],
    duration: 'Phase 4',
  },
  {
    number: '05',
    title: 'Test',
    subtitle: 'Validation, Edge-Case Audits & Optimization',
    description:
      'No project ships without rigorous verification. We run functional unit tests, inspect cross-browser responsiveness, verify mobile touchpoints, and optimize rendering to ensure smooth 60fps interaction.',
    deliverables: ['Test Results & Bug Fixes', 'Lighthouse Audit Report', 'Cross-Browser Verification'],
    duration: 'Phase 5',
  },
  {
    number: '06',
    title: 'Deliver',
    subtitle: 'Deployment, Documentation & Technical Handover',
    description:
      'We package the completed build with full documentation, IEEE papers, presentation decks, and zero-friction setup scripts. We walk you through every module so you can present or operate with total confidence.',
    deliverables: ['Live Production Deployment', 'IEEE Paper & PPT Decks', '1-on-1 Walkthrough Session'],
    duration: 'Phase 6',
  },
]

export const whyChooseUs: WhyChooseItem[] = [
  {
    id: 'practical',
    title: '100% Practical Implementation',
    description:
      'No theoretical fluff or mock screenshots. Every project we touch is an executable, functioning application engineered with production-ready standards.',
    iconName: 'CheckCircle2',
    highlight: 'Real Executable Code',
  },
  {
    id: 'modern-tech',
    title: 'Modern Technology Stack',
    description:
      'We leverage cutting-edge frameworks including React 18/19, Next.js, TypeScript, Tailwind CSS, Python AI/ML, and GSAP motion for future-proof engineering.',
    iconName: 'Layers',
    highlight: 'Future-Proof Architecture',
  },
  {
    id: 'structured',
    title: 'Structured Development Flow',
    description:
      'Clear milestone checkpoints from initial concept to final release. You receive continuous progress updates and clear visibility into each development phase.',
    iconName: 'Workflow',
    highlight: 'Milestone Tracking',
  },
  {
    id: 'customized',
    title: 'Bespoke Custom Solutions',
    description:
      'Every student, researcher, and client has distinct constraints. We customize every architecture and algorithm to match your exact academic or market requirements.',
    iconName: 'Sliders',
    highlight: 'Tailored To Your Needs',
  },
  {
    id: 'documentation',
    title: 'Comprehensive Documentation',
    description:
      'We provide complete IEEE-formatted research papers, detailed SRS reports, UML architecture diagrams, and slide decks designed for seamless evaluation.',
    iconName: 'FileCheck2',
    highlight: 'Publication Standards',
  },
  {
    id: 'support',
    title: 'End-to-End Handover Support',
    description:
      'Our commitment extends beyond delivery. We provide one-on-one code walkthroughs, viva voce preparation coaching, and dedicated deployment support.',
    iconName: 'Headphones',
    highlight: 'Complete Mentorship',
  },
]

export const targetAudienceSegments = [
  { label: 'College Students', desc: 'Practical guidance for semester mini-projects & software assignments' },
  { label: 'Final-Year Students', desc: 'High-scoring, innovative capstone projects with full viva defense preparation' },
  { label: 'Innovative Thinkers', desc: 'Transforming unique hardware/software concepts into functional prototypes' },
  { label: 'Custom Software Clients', desc: 'Bespoke business tools, administrative dashboards & workflow automations' },
  { label: 'Research Scholars', desc: 'IEEE conference paper writing, LaTeX formatting & algorithmic validations' },
  { label: 'Web & App Seekers', desc: 'Modern responsive websites, interactive web platforms & digital agency builds' },
]
