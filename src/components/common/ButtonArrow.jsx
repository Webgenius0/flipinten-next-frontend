import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const ButtonArrow = ({ variant, children, ...props }) => {

    console.log(variant);

    if (variant === 'secondary') {
        return <Button
            variant={'icon'}
            className={'bg-neutral text-neutral-secondary border-border '}
        >
            {children}
            <ArrowRight className="transition-transform duration-300 -translate-x-1 group-hover:translate-x-0" />
        </Button>
    }

    return (
        <Button
            variant={'icon'}
            {...props}
        >
            {children}
            <ArrowRight className="transition-transform duration-300 -translate-x-1 group-hover:translate-x-0" />
        </Button>
    );
};

export default ButtonArrow;