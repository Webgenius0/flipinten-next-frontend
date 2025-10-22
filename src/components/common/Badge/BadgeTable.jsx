import { cn } from '@/lib/utils';
import React from 'react';

const BadgeTable = ({ children, className }) => {
    return (
        <div
            className={cn(
                'flex items-center gap-3 border border-neutral100 rounded-full px-3 py-1 text-secondary',
                className
            )}
        >
            {children}
        </div>
    );
};

export default BadgeTable;