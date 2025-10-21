import { cn } from '@/lib/utils';
import React from 'react';

const CommonSection = ({ children, className, ...props }) => {
    return (
        <section
            className={className}
        >
            <div
                className={'container mx-auto py-24'}
                {...props}
            >
                {children}
            </div>
        </section>
    );
};

export default CommonSection;