"use client";

import NotificationSVG from "@/components/svg/NotificationSVG";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "@/assets/images/user-avatar.png";
import Image from "next/image";
import { toast } from "sonner";

export default function DashboardTopbar() {
  const currentPathName = usePathname();

  return (
    <div className="w-full h-full py-5 px-10 flex items-center justify-between">
      <div>
        <h2 className="text-black text-3xl font-semibold capitalize">
          {currentPathName === "/dashboard" ? (
            <span>Welcome back, Manoj Manju</span>
          ) : (
            <span>{currentPathName.split("/")[2].replace("-", " ")}</span>
          )}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <Link
          onClick={() => toast("Feature coming soon")}
          href={"#"}
          className="size-10 flex items-center justify-center border border-[#C1C4CC] rounded-lg bg-[#F5F6F7] cursor-pointer"
        >
          <NotificationSVG />
        </Link>

        <Link href={"#"} className="size-[50px] rounded-full">
          <Image
            src={UserAvatar}
            width={"40px"}
            height={"40px"}
            alt="User Image"
          />
        </Link>
      </div>
    </div>
  );
}
