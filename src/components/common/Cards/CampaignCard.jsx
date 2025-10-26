import React from "react";
import BadgeTable from "../Badge/BadgeTable";

const CampaignCard = ({ campaign }) => {
  const { title, items } = campaign;

  return (
    <div>
      <h3 className="text-neutral700 font-semibold text-2xl mb-4">{title}</h3>

      {/* card */}
      <div className="p-6 rounded-[12px] border border-neutral40 space-y-4 hover:shadow-xl transition-ease-in-out">
        {/* features  */}
        {items?.map((item, idx) => {
          const { label, feature, type } = item;
          return (
            <div key={label} className="text-neutral600 text-lg flex items-center justify-between">
              <p>{label}</p>
              {type === "badge" ? (
                <BadgeTable className={'rounded-xl my-0 py-0 text-base text-neutral500 font-medium'}>{feature}</BadgeTable>
              ) : (
                <p className="text-color-secondary font-medium">{feature}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignCard;
