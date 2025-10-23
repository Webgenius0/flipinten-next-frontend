import logo from "@/components/assets/icon/logo.svg";
import Image from "next/image";
import LogoWhite from "./LogoWhite";

const LogoIcon = ({ size = 150, variant }) => {
  if (variant == "secondary") {
    return <LogoWhite />;
  }
  return <Image src={logo} alt="logo" width={size} />;
};

export default LogoIcon;
