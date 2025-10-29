"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NestedNavLink = ({ link }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-2 text-lg text-white cursor-pointer bg-transparent border-none shadow-none outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:ring-0 data-[state=open]:outline-none data-[state=open]:border-none"
        )}
      >
        {link?.label}
        <ChevronDown className="scale-80" />
      </DropdownMenuTrigger>


      {/* child links  */}
      <DropdownMenuContent className="z-300 bg-primary border-0 rounded-none">
        {link?.childLinks?.map((childLink) => (
          <DropdownMenuItem
            key={childLink.label}
            className="hover:bg-white/20 text-white cursor-pointer focus:bg-white/20"
            onClick={() => setOpen(false)}
          >
            <Link href={childLink.path} className="w-full block">
              {childLink.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NestedNavLink;
