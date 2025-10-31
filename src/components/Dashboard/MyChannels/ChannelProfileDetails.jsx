import React from "react";
import img from "../../../assets/images/channelProfile.png";

const channelDetails = {
  channelName: "Horror Mania",
  channelId: "YTC001",
  status: "Active",
  totalProfitGenerated: "₹10,00,000",
  planName: "Starter Plus",
  topicChosen: "Horror Stories",
  channelCreatedOn: "10/05/2023",
  noOfVideosUploaded: 1,
  nextVideoUploadingIn: "60:22H:15M",
  lastUpdated: "2 days ago",
  toBeLinked: "YouTube",
  channelValue: 5000,
  channelValueDuration: "24 months",
  value: 5,
  monitizationExpectationDay: 175,
  monitizationDate: "10/06/2023",
  youtubeEmil: "hello@gmail.com",
  splitAmountDueDate: "10/6/2023",
  currentMonthProfit: "₹10,00,000",
  YTStartShare: "$5000",
  paymentAmountDue: "₹2,00,000",
  image: img,
};

export default function ChannelProfileDetails() {
  return (
    <div>
      {/* channel details top content */}
      <div className="w-full py-6 px-12 rounded-2xl bg-white my-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431] mb-6">
            Channel Details
          </h3>

          <p className="text-base font-medium leading-6 text-[#6A7283]">
            Last Updated: {channelDetails?.lastUpdated}
          </p>
        </div>

        <div className="grid grid-cols-4 mt-6">
          {/* 1st content */}
          <div className="flex flex-col justify-between mb-2">
            <div className="w-24 h-24 relative rounded-full">
              <img
                src={channelDetails?.image?.src}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-2">
              <p className="text-2xl font-semibold leading-9 text-[#071431]">
                {channelDetails?.channelName}
              </p>
              <p className="text-sm text-neutral100 leading-[21px]">
                (To be linked to youtube)
              </p>
              <div className="text-base font-medium leading-9 text-[#1CCC62] flex items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-[#1CCC62]" />
                <p>{channelDetails?.status}</p>
              </div>

              {/* <p className="flex items-center gap-2">
                <p className="bg-green-600 w-2 h-2 rounded-full"></p>
                <span className="text-green-600">Active</span>
              </p> */}
            </div>
          </div>

          {/* 2nd content */}
          <div className="flex flex-col justify-between">
            <div className="text-base font-medium">
              <p className="text-neutral100">Channel ID </p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.channelId}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-neutral100">Channel Created On</p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.channelCreatedOn}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-neutral100">No of Videos Uploaded</p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.noOfVideosUploaded}
              </p>
            </div>
          </div>

          {/* 3rd content */}
          <div className="flex flex-col justify-between">
            <div className="text-base font-medium">
              <p className="text-neutral100">Plan Name</p>
              <p className="text-xl font-semibold text-green-600 underline">
                {channelDetails?.planName}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-neutral100">Topic Chosen</p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.topicChosen}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-neutral100">Next Video Uploading In</p>
              <p className="text-xl font-semibold text-red-600">
                {channelDetails?.nextVideoUploadingIn}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
