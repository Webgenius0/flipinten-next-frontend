import navLinks from '@/data/NavLink';
import Link from 'next/link';
import React from 'react';
import NestedNavLink from './NestedNavLink';

const NavLinks = () => {
    return (
        <>
            {
                navLinks?.map((link) => (
                    <Link
                        className='text-lg text-white cursor-pointer'
                        key={link?.label} href={link?.path} >
                        {
                            !!link?.childLinks
                                ? <NestedNavLink link={link} />
                                : link?.label
                        }
                    </Link>
                ))
            }
        </>
    );
};

export default NavLinks;