import Globe from "../svg/Globe";
import { Button } from "../ui/button";

const NavbarActions = () => {
    return (
        <div className="flex items-center gap-6">
            <Globe size={36} />

            <Button
                variant={'outline'}
            >
                Sign in
            </Button>

            <Button
            >
                Get started
            </Button>
        </div>
    );
};

export default NavbarActions;