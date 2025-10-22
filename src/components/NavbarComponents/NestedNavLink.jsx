import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import Link from "next/link";

const NestedNavLink = ({ link }) => {
    return (
        <Select>
            <SelectTrigger className="border-none p-0 text-lg focus-visible:ring-0 shadow-none cursor-pointer text-white">
                {link?.label}
            </SelectTrigger>

            <SelectContent className="z-300 bg-primary border-0 rounded-none w-full">
                {link?.childLinks?.map((childLink) => (
                    <SelectItem
                        showIcon={false}
                        key={childLink.label}
                        value={childLink.label}
                        className="focus:bg-white/20 rounded-none hover:bg-red-100"
                    >
                        <Link href={childLink.path} className="text-white cursor-pointer">
                            {childLink.label}
                        </Link>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default NestedNavLink;
