import { cn } from "@/lib/utils";

const SectionHeading = ({
    title, subtitle, className
}) => {
    return (
        <div className={cn(
            "text-center space-y-6 mb-12",
            className
        )}>
            <h1 className="text-brand-primary font-semibold text-4xl" >
                {title}</h1>
            <p className="text-neutral200 tex-lg">
                {subtitle}</p>
        </div>
    );
};

export default SectionHeading;