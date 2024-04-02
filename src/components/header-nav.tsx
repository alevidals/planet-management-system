import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  onClick?: () => void;
};

export function HeaderNav(props: Props) {
  const { onClick } = props;

  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start md:items-center md:flex-row gap-4">
      {LINKS.map((link) => (
        <Link
          onClick={onClick}
          key={link.href}
          href={link.href}
          className={`${
            link.href === pathname ? "underline text-primary font-semibold" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
