import navLinks from "@/data/NavLink";
import Link from "next/link";
import React from "react";
import NestedNavLink from "./NestedNavLink";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <>
      {navLinks?.map((link) => {
        return (
          <Link
            className={`${
              pathName.includes(link?.path) ? "underline font-bold" : ""
            } text-lg text-white cursor-pointer`}
            key={link?.label}
            href={link?.path}
          >
            {!!link?.childLinks ? <NestedNavLink link={link} /> : link?.label}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
