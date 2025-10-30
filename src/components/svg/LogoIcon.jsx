import logo from "@/assets/icon/logo.svg";
import Image from "next/image";
import LogoWhite from "./LogoWhite";
import Link from "next/link";

const LogoIcon = ({ size = 150, variant }) => {
  if (variant == "secondary") {
    return (
      <Link href={"/"}>
        <div>
          <LogoWhite />
        </div>
      </Link>
    );
  }
  return (
    <Link href={"/"}>
      <div>
        <Image src={logo} alt="logo" width={size} />
      </div>
    </Link>
  );
};

export default LogoIcon;
