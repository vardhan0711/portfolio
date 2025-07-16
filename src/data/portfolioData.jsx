import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaCode, FaGitlab,  FaGitAlt, FaFigma, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import{SiCplusplus,SiC,SiTailwindcss,SiNextdotjs,SiExpress,SiMongodb,SiMysql,SiPostgresql,SiFirebase,SiVercel,SiNetlify,SiPostman, SiFigma, SiAdobe, SiShadcnui, SiJavascript, SiReact}from 'react-icons/si';

export const personalInfo = {
  name: "Yashvardhan Singh",
  title: "Full-Stack Developer | AI & Web Enthusiast",
  email: "yvardhan0711@gmail.com",
  linkedin: "https://linkedin.com/in/yashvardhan-singh-82ab03288",
  github: "https://github.com/vardhan0711",
  resumeLink: "/Resume.pdf",
  bio: "Energetic Full-Stack Developer and AI/Web enthusiast with a passion for building impactful digital solutions. Always eager to learn, collaborate, and innovate in the world of technology.",
  shortBio: "Full-Stack Developer | AI & Web Enthusiast"
};

export const education = [
  {
    institution: "MNNIT Allahabad",
    degree: "B.Tech ECE",
    duration: "2021 – Present",
    score: "CGPA: 7.4 (Till 5th Sem)",
  },
  {
    institution: "St. Johns Sr. Sec. School, Kota",
    degree: "Class 12th",
    duration: "2019 – 2021",
    score: "73%",
  },
  {
    institution: "Modern Sr. Sec. School, Kota",
    degree: "Class 10th",
    duration: "2017 – 2019",
    score: "93.4%",
  },
];

export const projects = [
    {
    title: "Splitsy-AI powered expense spliter",
    tech: ["HTML", "CSS", "JavaScript","Tailwind","Node Js","Next Js","Convex","Clerk","Gemini AI","Vercel"],
    description: "Smart web application designed to simplify and manage group and personal expenses",
    date: "2025",
    githubLink: "https://github.com/vardhan0711/",
    liveLink: "https://splitsy-gamma.vercel.app/",
    category: "Web App",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "PrepView – AI Interviewer",
    tech: ["HTML", "CSS", "JavaScript","Node Js","Next.js", "Firebase", "Tailwind", "Vapi AI", "Gemini AI"],
    description: "AI-powered mock interview platform for students and professionals. Generates real-time interview questions and feedback using LLMs.",
    date: "2025",
    githubLink: "https://github.com/vardhan0711/smart-interviewer",
    liveLink: null, // Replace with actual demo link if available
    category: "AI/Web",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Crea-quiz – Quiz Generator",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Web app to generate and take quizzes on any topic. Simple, fast, and user-friendly.",
    date: "2024",
    githubLink: "https://github.com/vardhan0711/crea-quiz",
    liveLink: null,
    category: "Web App",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  
];

export const skills = {
  languages: [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  frameworksAndLibraries: [
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaCode /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "shadcn/ui", icon: <SiShadcnui /> },
  ],
  databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  toolsAndPlatforms: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "GitLab", icon: <FaGitlab /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Adobe XD", icon: <SiAdobe /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Full-Stack Development",
    "AI Integration",
    "API Development",
    "RESTful APIs",
    "Responsive Design",
    "Version Control",
    "Agile Methodologies",
    "Competitive Programming",
    "DSA"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "R&D Member",
    organization: "ENACTUS MNNIT",
    duration: "2023–Present",
    points: [
      "Contributed to social entrepreneurship projects and technical research.",
    ],
  },
  {
    role: "Organizer",
    organization: "VCAS'23 & VCAS'24",
    duration: "2023–2024",
    points: [
      "Organized and managed major college events with 1000+ participants.",
    ],
  },
];

export const achievements = [
  "Runner-Up @ Electromania, Techkriti (IIT Kanpur) 2023",
  "Max Leetcode Rating: 1719 – https://leetcode.com/u/yashvrdhan0711"
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:+919636059346`, icon: <FaPhone size={24} /> },
};