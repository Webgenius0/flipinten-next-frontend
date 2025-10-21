import NavbarActions from '@/components/Navbar/NavbarActions';
import NavLinks from '@/components/Navbar/NavLinks';
import LogoIcon from '@/components/svg/LogoIcon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Navbar = () => {
    return (
        <nav className='container mx-auto flex items-center justify-between py-6'>
            <LogoIcon />

            <ul
                className='flex items-center gap-8 bg-primary py-3 px-6 rounded-md'
            >
                <NavLinks />
            </ul>

            <NavbarActions />
        </nav>
    );
};

export default Navbar;