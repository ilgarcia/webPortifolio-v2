import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="absolute bottom-0 bg-slate-950 text-orange-400 w-full border-t-2 border-indigo-500/30 px-4 2xl:px-0">
      <div className="flex items-center max-w-8xl mx-auto py-4 text-sm font-light">
        <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
      </div>
    </footer>
  );
}

export default Footer;
