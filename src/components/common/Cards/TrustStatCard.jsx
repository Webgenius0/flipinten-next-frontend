const TrustStatCard = ({ data }) => {
  const { color, icon: Icon, stat, title, subtitle } = data;
  return (
    <div className="p-6 flex flex-col items-center gap-5 bg-neutral border border-neutral30 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="max-w-max">
        <Icon size={40} color={color} />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-lg font-semibold" style={{ color: `${color}` }}>
          {stat}
        </h2>
        <p className="text-neutral500 text-lg font-medium">{title}</p>
        <p className="text-neutral600 text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default TrustStatCard;
