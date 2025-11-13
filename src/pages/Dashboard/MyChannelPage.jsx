import ArrowRightSvg from "@/components/svg/DashboardSvg/ArrowRightSvg";
import Link from "next/link";
import React from "react";

export default function MyChannelPage() {
  return (
    <div>
      <div className="mt-12 w-1/2 mx-auto  flex flex-col items-center justify-center text-center">
        <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431] mb-6">
          You Haven’t Bought Any Plans Yet!
        </h3>
        <p className="text-base font-medium leading-6 text-[#6A7283] w-2/3">
          Choose a plan today and let us take care of everything for your
          YouTube channel. From creation to monetization, we handle it all so
          you can start earning effortlessly!
        </p>

        <div className="my-10">
          <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431] mb-6">
            How does it work?
          </h3>

          <div className="border-[5px] border-[#FE0000] shadow-custom w-[604px] h-[340px] rounded-[18px] overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GAEnQGT7J-M?si=Q_mvUkQvkdzBU4BE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link
              href={"/dashboard/my-channels/cooking-master"}
              className="group bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-[30px] transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <p className="w-6 h-6">
                <ArrowRightSvg />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
