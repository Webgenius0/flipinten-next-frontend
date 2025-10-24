'use client'

import NavbarActions from '@/components/NavbarComponents/NavbarActions';
import NavLinks from '@/components/NavbarComponents/NavLinks';
import LogoIcon from '@/components/svg/LogoIcon';
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY

            if (currentScroll > lastScrollY && currentScroll > 80) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(currentScroll)
        }


        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])


    
    return (
        <header
            className={`bg-neutral/80 backdrop-blur-md sticky top-0 z-200 transition-transform duration-500 ease-in-out 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <nav className='container mx-auto flex items-center justify-between py-6'>
                <LogoIcon />
                <ul
                    className='flex items-center gap-8 bg-primary py-3 px-6 rounded-md'
                >
                    <NavLinks />
                </ul>
                <NavbarActions />
            </nav>
        </header>
    );
};

export default Navbar;