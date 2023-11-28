import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="hidden sm:block absolute bottom-0 bg-slate-950 text-orange-400 w-full border-t-2 border-indigo-500/30 px-4 z-50">
      <div className="flex items-center max-w-8xl mx-auto py-4 text-sm sm:text-base font-light">
        <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
      </div>
    </footer>
  );
}

export default Footer;
