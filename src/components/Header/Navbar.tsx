import Link from "next/link";

import NavItem from "./NavItem";
import { Button } from "../Ui/Button";
import { navLinks } from "../../data/constants";
import { cn } from "../../lib/utils";

type Props = {
  toggle: () => void;
  open: boolean;
};

function Navbar({ toggle, open }: Props) {
  return (
    <nav
      className={cn(
        "absolute top-full lg:static flex flex-col lg:flex-row justify-center items-center right-0 [width:min(70vw,300px)] lg:w-fit font-fira text-base lg:text-sm lg:space-x-7 space-y-5 lg:space-y-0 z-50 lg:visible duration-100",
        open ? "" : "invisible"
      )}
    >
      <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
        {navLinks.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            title={item.title}
            toggle={toggle}
          />
        ))}
      </ul>
      <div>
        <Button>
          <Link href={"/journal"} onClick={toggle}>
            Blog
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
