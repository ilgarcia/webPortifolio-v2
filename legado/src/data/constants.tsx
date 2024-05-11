import { FiMail, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export const socials = [
  {
    title: "Email",
    type: "email",
    link: "limagarcia.igor@gmail.com",
    icon: <FiMail className="text-xl sm:text-2xl" />,
    showIcon: false,
  },
  {
    title: "GitHub",
    type: "github",
    link: "https://github.com/ilgarcia",
    icon: <FiGithub className="text-xl sm:text-2xl" />,
    showIcon: true,
  },
  {
    title: "Linkedin",
    type: "linkedin",
    link: "https://www.linkedin.com/in/ilgarcia/",
    icon: <FiLinkedin className="text-xl sm:text-2xl" />,
    showIcon: true,
  },
  {
    title: "Resume",
    type: "resume",
    link: "/resume.pdf",
    icon: <FiFileText className="text-xl sm:text-2xl" />,
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
