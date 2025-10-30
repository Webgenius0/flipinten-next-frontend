import Image from "next/image";
import shield from "@/assets/icon/shield.png";

const Shield = ({ size = 48 }) => {
  return <Image src={shield} alt="shield" width={size} />;
};

export default Shield;
