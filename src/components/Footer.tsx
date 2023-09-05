import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="relative bg-slate-950 text-orange-400  border-t-2 border-indigo-500/30">
      <div className="flex items-center max-w-7xl mx-auto py-4 text-sm font-light">
        <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
      </div>
    </footer>
  );
}

export default Footer;
