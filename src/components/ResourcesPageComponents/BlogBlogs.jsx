import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import useBlogCardData from "@/hooks/landingPageHooks/useBlogCardData";
import UserSvg from "./../svg/UserSvg";
import CalendarSvg from "../svg/CalendarSvg";
import Link from "next/link";
import ArrowSvg from "../svg/ArrowSvg";

export default function BlogBlogs() {
  const blogs = useBlogCardData();
 
  return (
    <CommonSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs?.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-sm space-y-4"
          >
            <div className="w-full h-[361px] rounded-xl overflow-hidden">
              <img
                src={blog?.image?.src}
                alt={blog?.author}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="">
              <div className="text-lg font-medium flex items-center justify-between">
                <p className="text-primary bg-[#FEE2E2] py-1.5 px-3 rounded-full">
                  {blog?.category}
                </p>
                <p className="text-neutral-400 ">{blog?.readTime}</p>
              </div>

              <p className="text-xl font-semibold leading-[30px] my">
                {blog?.title}
              </p>

              <p className="text-base font-medium text-neutral-300">
                {blog?.description}
              </p>

              <div className="w-full mt-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-base text-neutral-300 flex items-center gap-3">
                    <p className="w-6 h-6">
                      <UserSvg />
                    </p>
                    <p>{blog?.author}</p>
                  </div>

                  <div className="text-base text-neutral-300 flex items-center gap-3">
                    <p className="w-6 h-6">
                      <CalendarSvg />
                    </p>
                    <p>{blog?.date}</p>
                  </div>
                </div>

                <Link
                  href={"#"}
                  className="text-xl font-semibold text-primary flex items-center gap-2"
                >
                  Read More{" "}
                  <p className="w-5 h-5">
                    <ArrowSvg />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CommonSection>
  );
}
