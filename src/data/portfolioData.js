/**
 * Portfolio content configuration.
 * Update placeholder links (such as LinkedIn or individual project URLs) here.
 */

export const PROFILE = {
  name: 'Ashna Susan',
  initials: 'AS',
  title: 'Computer Science and Engineering Student | Aspiring Software Developer',
  shortIntro:
    'Third-year Computer Science and Engineering student at Government Engineering College, Palakkad, focused on building reliable software, modern web applications, and embedded systems.',
  institution: 'Government Engineering College, Palakkad',
  academicYear: 'Third-Year B.Tech CSE Student',
  email: 'ashnasusan137@gmail.com',
  githubUrl: 'https://github.com/ashna137-star',
  linkedinUrl: 'https://www.linkedin.com/in/ashna-susan-43103b330',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'internship', label: 'Internship' },
  { id: 'certifications', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT_INFO = {
  paragraphs: [
    'I am a third-year Computer Science and Engineering student at Government Engineering College, Palakkad, building a strong foundation in core computing principles and hands-on engineering.',
    'My primary interests span software development, web technologies, and emerging technologies—from crafting clean front-end interfaces and structured back-end services to experimenting with microcontroller-based embedded systems.',
  ],
  highlights: [
    { label: 'Institution', value: 'Government Engineering College, Palakkad' },
    { label: 'Program', value: 'Computer Science & Engineering (3rd Year)' },
    { label: 'Core Focus', value: 'Software & Web Development' },
    { label: 'Exploring', value: 'Emerging Technologies & Embedded Systems' },
  ],
};

export const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core languages & problem solving',
    accent: 'from-violet-500 to-indigo-500',
    items: ['Python', 'C', 'Java', 'JavaScript'],
  },
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Interface design & server logic',
    accent: 'from-blue-500 to-cyan-500',
    items: ['HTML', 'Front-end Development', 'Back-end Development'],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & document data modeling',
    accent: 'from-indigo-500 to-purple-500',
    items: ['SQL', 'NoSQL'],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    subtitle: 'Hardware-software integration',
    accent: 'from-cyan-500 to-blue-600',
    items: ['STM32 Microcontroller'],
  },
];

export const PROJECTS = [
  {
    id: 'echoes',
    title: 'ECHOES – The Stories We Left Behind',
    category: 'Hackathon',
    context: 'NASA Space Apps Challenge 2026',
    summary:
      'Project developed for the NASA Space Apps Challenge 2026, centered on presenting stories and space-inspired narratives through an engaging digital experience.',
    details:
      'Created as part of the NASA Space Apps Challenge 2026, where the project earned recognition as a Galactic Problem Solver submission. Focused on clear narrative structure, visual communication, and collaborative problem solving.',
    techStack: ['NASA Space Apps 2026', 'Web Technologies', 'Interactive Storytelling'],
    // TODO: Add your repository or live project URL when available
    repoUrl: '',
    demoUrl: '',
    accent: 'from-violet-500/20 via-indigo-500/10 to-blue-500/20',
  },
  {
    id: 'stm32-irrigation',
    title: 'Automatic Irrigation System Using STM32 Microcontroller',
    category: 'Embedded',
    context: 'Embedded Systems Project',
    summary:
      'Automated irrigation control system built on the STM32 microcontroller platform to manage watering operations efficiently with minimal manual intervention.',
    details:
      'Designed around the STM32 microcontroller to coordinate embedded input/output control for automated irrigation workflows, applying C programming and low-level hardware interfacing.',
    techStack: ['STM32 Microcontroller', 'Embedded Systems', 'C'],
    // TODO: Add your repository or documentation URL when available
    repoUrl: '',
    demoUrl: '',
    accent: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
  },
  {
    id: 'campus-events',
    title: 'Campus Event Management Website',
    category: 'Web',
    context: 'Full-Stack Web Application',
    summary:
      'Web platform for organizing and managing campus events, combining a responsive HTML and JavaScript front-end with a Java and Springboard back-end.',
    details:
      'Built to streamline event listings and coordination across campus. Structured with HTML and JavaScript on the client side and Java with Springboard powering back-end development.',
    techStack: ['HTML', 'JavaScript', 'Java', 'Springboard'],
    // TODO: Add your repository or live project URL when available
    repoUrl: '',
    demoUrl: '',
    accent: 'from-blue-500/20 via-violet-500/10 to-purple-500/20',
  },
];

export const INTERNSHIP = {
  role: 'Web Development Intern',
  company: 'SkillCraft Technology',
  duration: 'June 15, 2026 – July 15, 2026',
  mode: 'One-month online internship',
  summary:
    'Selected for a one-month online web development internship at SkillCraft Technology, applying front-end and back-end development fundamentals to practical web tasks.',
  tags: ['Web Development', 'Online Internship', '1 Month'],
};

export const CERTIFICATIONS = [
  {
    id: 'nptel-python',
    title: 'NPTEL Elite – The Joy of Computing Using Python',
    issuer: 'NPTEL',
    badge: '92% • Elite',
    category: 'Certification',
    description:
      'Awarded NPTEL Elite certification with a 92% score for demonstrating strong proficiency in Python programming and computational thinking.',
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Challenge 2026 – Galactic Problem Solver',
    issuer: 'NASA Space Apps Challenge',
    badge: 'Galactic Problem Solver',
    category: 'Achievement',
    description:
      'Recognized as a Galactic Problem Solver at the NASA Space Apps Challenge 2026 for contributing to ECHOES – The Stories We Left Behind.',
  },
  {
    id: 'ieee-yess',
    title: "IEEE Yearly Engineering Students Summit (YESS'25)",
    issuer: 'IEEE',
    badge: "YESS'25",
    category: 'Summit & Recognition',
    description:
      "Participated in the IEEE Yearly Engineering Students Summit (YESS'25), engaging with engineering peers and emerging technology discussions.",
  },
];
