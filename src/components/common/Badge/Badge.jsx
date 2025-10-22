import { cn } from '@/lib/utils';
import React from 'react';

const Badge = ({ children, className }) => {
    return (
        <div
        className={cn(
            'text-neutral text-lg border border-primary bg-primary/20 px-4 py-1 rounded-full ',
            className
        )}
        >
            {children}
        </div>
    );
};

export default Badge;  