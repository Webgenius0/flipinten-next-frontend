
const SectionHeading = ({
    title, subtitle
}) => {
    return (
        <div className="text-center space-y-6">
            <h1 className="text-brand-primary font-semibold text-4xl" >
                {title}</h1>
            <p className="text-neutral200 tex-lg">
                {subtitle}</p>
        </div>
    );
};

export default SectionHeading;