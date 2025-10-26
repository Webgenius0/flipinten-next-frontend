import React from "react";
import BadgeTable from "../Badge/BadgeTable";

const SkillsCard = ({ demandingSkill }) => {
  const { label, rate, tag, skills } = demandingSkill;

  return (
    <div className="p-8 bg-neutral rounded-3xl border border-neutral30 hover:shadow-xl transition-ease-in-out">
      <div className="flex items-center justify-between mb-3">
        <p className="text-secondary font-medium text-2xl">{label}</p>
        {tag === "Very High Demand" ? (
          <BadgeTable className={"text-xs bg-primary border-primary text-neutral"}>{tag}</BadgeTable>
        ) : (
          <BadgeTable className={"text-xs"}>{tag}</BadgeTable>
        )}
      </div>
      <p className="text-neutral500">
        Rate range: <span className="text-primary font-semibold">{rate}</span>
      </p>

      {/* skills container  */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {skills?.map((skill, index) => {
          return (
            <p
              key={index}
              className="bg-neutral20 p-3 rounded text-neutral500 text-sm"
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
