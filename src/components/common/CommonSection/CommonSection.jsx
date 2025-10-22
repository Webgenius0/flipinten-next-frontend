import { cn } from '@/lib/utils';
import React from 'react';

const CommonSection = ({ sectionBG, children, className, ...props }) => {
    return (
        <section
            className={sectionBG}
        >
            <div
                className={cn(
                    'max-w-[1320px] mx-auto py-24',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </section>
    );
};

export default CommonSection;