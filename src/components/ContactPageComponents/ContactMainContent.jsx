import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import MailSvg from "../svg/MailSvg";
import CallSvg from "../svg/CallSvg";
import WhatsappSvg from "../svg/WhatsappSvg";
import LocationSvg from "../svg/LocationSvg";
import ClockSvg from "../svg/ClockSvg";
import ContactForm from "./ContactForm";

// sample data
const supportContacts = [
  {
    id: 1,
    method: "Email Support",
    contact: "hello@jvtsiart.com",
    details: "Response within 4 hours",
    type: "email",
    icon: <MailSvg />,
  },
  {
    id: 2,
    method: "Phone Support",
    contact: "+1 564 5548 89744",
    details: "Mon-Fri 9AM-6PM IST",
    type: "phone",
    icon: <CallSvg />,
  },
  {
    id: 3,
    method: "WhatsApp Support",
    contact: "+1 564 5548 89744",
    details: "Mon-Fri 9AM-6PM IST",
    type: "whatsapp",
    icon: <WhatsappSvg />,
  },
  {
    id: 4,
    method: "Office Location",
    contact: "Mumbai, India",
    details: "By appointment only",
    type: "location",
    icon: <LocationSvg />,
  },
];

const deliveryHours = {
  id: 5,
  method: "Business Hours",
  icon: <ClockSvg />,
  extra: true,
  businessHours: [
    {
      id: 1,
      day: "Monday-Friday",
      hours: "9 AM - 6 PM IST",
      status: "open",
    },
    {
      id: 2,
      day: "Saturday",
      hours: "10 AM - 4 PM IST",
      status: "open",
    },
    {
      id: 3,
      day: "Sunday",
      hours: "Closed",
      status: "closed",
    },
  ],
};

export default function ContactMainContent() {
  return (
    <CommonSection>
      <div className="w-full grid grid-cols-12 gap-8">
        <div className="col-span-4 p-8 border border-[#EBECEF] rounded-2xl">
          <p className="text-[32px] font-semibold leading-[38px] text-neutral-800">
            Contact Methods
          </p>
          <div className="my-6 border border-[#DFE0E4] border-dashed" />

          <div className="space-y-6">
            {supportContacts?.map((contact, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-2xl flex items-center gap-6"
              >
                <div className="border border-[#DFE0E4] rounded-full p-5 w-fit">
                  <p className="w-9 h-9">{contact?.icon}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-semibold">{contact?.method}</p>
                  <p className="text-base font-semibold">{contact?.contact}</p>
                  <p>{contact?.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="">
                <p className="w-9 h-9">{deliveryHours?.icon}</p>
              </div>
              <p className="text-xl font-semibold">{deliveryHours?.method}</p>
            </div>

            <div className="mt-4 space-y-3">
              {deliveryHours?.businessHours?.map((time, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <p>{time?.day}</p>
                  <p>{time?.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-fit col-span-8 p-8 border border-[#EBECEF] rounded-2xl ">
          <p className="text-[32px] font-semibold leading-[38px] text-neutral-800">
            Send Us a Message
          </p>
          <p className="text-xl font-medium text-neutral-500 leading-[30px] mt-2">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
          <div className="my-6 border border-[#DFE0E4] border-dashed" />

          <ContactForm />
        </div>
      </div>
    </CommonSection>
  );
}
