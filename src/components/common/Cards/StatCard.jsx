import React from "react";

const StatCard = ({ statInfo }) => {
  const { stat, label, prefix, suffix } = statInfo;
  return (
    <div className="p-4 space-y-2 text-center">
      <p className="text-color-secondary font-semibold text-5xl">{prefix}{stat}{suffix}</p>
      <p className="text-2xl text-neutral500">{label}</p>
    </div>
  );
};

export default StatCard;
