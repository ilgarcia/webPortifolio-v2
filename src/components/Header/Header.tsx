import { LogoNeon } from "../Ui/Logo";
import { Navbar } from "./Navbar";

import NeonBorder from "./NeonBorder";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="fixed top-0 lg:-left-3 w-full z-40 backdrop-blur-lg">
      <div className="flex items-center justify-between max-w-8xl mx-auto px-4 py-2.5 lg:py-3.5">
        <LogoNeon />
        <Sidebar />
        <Navbar />
      </div>
      <NeonBorder />
    </header>
  );
}

export default Header;
