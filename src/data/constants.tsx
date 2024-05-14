import { FiMail, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export const socials = [
  {
    title: "Email",
    type: "email",
    link: "limagarcia.igor@gmail.com",
    icon: <FiMail />,
    showIcon: false,
  },
  {
    title: "GitHub",
    type: "github",
    link: "https://github.com/ilgarcia",
    icon: <FiGithub />,
    showIcon: true,
  },
  {
    title: "Linkedin",
    type: "linkedin",
    link: "https://www.linkedin.com/in/ilgarcia/",
    icon: <FiLinkedin />,
    showIcon: true,
  },
  {
    title: "Resume",
    type: "resume",
    link: "/resume.pdf",
    icon: <FiFileText />,
    showIcon: true,
  },
];

export const navLinks = [
  { id: "about", title: "About" },
  { id: "portfolio", title: "Portfolio" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];
