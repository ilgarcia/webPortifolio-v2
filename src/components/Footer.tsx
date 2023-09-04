import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="relative bg-black text-orange-400">
      <div className="flex items-center max-w-7xl mx-auto py-4 text-sm font-light">
        <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
      </div>
    </footer>
  );
}

export default Footer;
