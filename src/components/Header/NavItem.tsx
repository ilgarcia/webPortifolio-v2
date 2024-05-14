import Link from "next/link";

type Props = {
  title: string;
  id: string;
  toggle: () => void;
};

function NavItem({ id, title, toggle }: Props) {
  return (
    <li className={`nav-link`}>
      <Link href={`/#${id}`} onClick={toggle}>
        {title}
      </Link>
    </li>
  );
}

export default NavItem;
