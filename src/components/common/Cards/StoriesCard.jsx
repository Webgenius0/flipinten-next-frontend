import YoutubeStudio from "@/components/svg/YoutubeStudio";
import Image from "next/image";
import React from "react";

const StoriesCard = ({ story }) => {
  return (
    <div className="flex gap-16 items-center">
      {/* image  */}
      <div>
        <Image src={story?.image} alt={story?.label} />
      </div>

      {/* info container  */}
      <div className="space-y-6 flex-1">
        {/* title  */}
        <h1 className="font-semibold text-3xl text-color-primary">
          {story?.label}
        </h1>
        <p className="text-lg text-neutral200 max-w-[430px]">
          {story?.description}
        </p>

        {/* achievements container   */}
        <div className="space-y-6">
          {story?.achievements?.map((item, idx) => {
            return (
              <div key={idx} className="group hover:shadow-md transition-all duration-300 ease-in-out flex items-center gap-6 p-6 bg-neutral rounded-[12px]">
                <div className="bg-primary p-4 max-w-max rounded-2xl">
                  <YoutubeStudio variant={"secondary"} size={25} />
                </div>
                <div>
                  <p className="font-semibold text-3xl text-secondary">
                    {item?.stat}
                    <span className="text-neutral100 text-base font-medium">
                      /{item?.per}
                    </span>
                  </p>
                  <p className="text-lg font-medium text-neutral90">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
