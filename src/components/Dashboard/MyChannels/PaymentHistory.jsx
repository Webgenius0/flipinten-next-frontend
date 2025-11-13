import React from "react";
import usePaymentHistoryQuery from "@/hooks/Dashboard/usePaymentHistoryQuery";

export default function PaymentHistory() {
  const paymentHistory = usePaymentHistoryQuery();

  return (
    <div>
      <p className="text-2xl font-medium">Payout History</p>

      <div className="space-y-6 mt-6">
        {paymentHistory?.map((payment, idx) => (
          <div
            key={idx}
            className="bg-[#FAFAFB] rounded-[12px] p-5 flex items-center gap-4 justify-between text-xl"
          >
            <div>
              <p className="font-medium">{payment?.description}</p>
              <p>{payment?.date}</p>
            </div>

            <div className="">
              <p
                className={`text-2xl font-bold ${
                  payment?.status?.toLowerCase() === "paid" && 'text-[#1CCC62]'
                }`}
              >
                {payment?.amount}
              </p>
              <p
                className={`text-sm font-semibold py-1.5 px-4 text-center  ${
                  payment?.status?.toLowerCase() === "paid" && 'text-[#1CCC62] bg-[#1CCC62]/10 rounded-3xl'
                }`}
              >
                {payment?.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
