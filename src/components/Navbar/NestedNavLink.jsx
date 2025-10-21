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

            <SelectContent className="bg-primary">
                {link?.childLinks?.map((childLink) => (
                    <SelectItem
                        showIcon={false}
                        key={childLink.label}
                        value={childLink.label}
                        className="focus:bg-transparent"
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
