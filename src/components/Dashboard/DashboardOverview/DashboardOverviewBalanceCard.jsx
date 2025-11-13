import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import ArrowUploadSvg from "@/components/svg/DashboardSvg/ArrowUploadSvg";
import CalendarColoredSvg from "@/components/svg/DashboardSvg/CalendarColoredSvg";
import DownloadSvg from "@/components/svg/DashboardSvg/DownloadSvg";
import useOverviewCardDataQuery from "@/hooks/Dashboard/useOverviewCardDataQuery";

export default function DashboardOverviewBalanceCard() {
  const info = useOverviewCardDataQuery();
  return (
    <div>
      <WhiteBox className={"flex items-center justify-between"}>
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-[12px] bg-[#EFF6FF] w-fit">
              <p className="w-6 h-6">
                <CalendarColoredSvg />
              </p>
            </div>

            <div className="text-lg text-neutral100 font-medium leading-7 space-y-2">
              <p>Available Balance</p>
              <p>Funds available for buying channel plans & services</p>
            </div>
          </div>

          <p className="text-[40px] font-bold leading-12 mt-6">$12,847.50</p>
        </div>

        <div className="flex items-center gap-6">
          <CommonButton
            iconLeft={
              <DownloadSvg
                className="group-hover:[&>path]:fill-black w-6 h-6"
                fillColor="currentColor"
              />
            }
            iconClass={"w-6 h-6"}
            text={"Deposite Funds"}
            className={
              "py-2 px-4 bg-primary text-white rounded-xl flex items-center gap-2 border border-primary cursour-pointer hover:bg-white hover:text-primary duration-300 ease-in-out"
            }
          />

          <CommonButton
            iconLeft={<ArrowUploadSvg />}
            iconClass={"w-6 h-6"}
            text={"Withdraw Funds"}
            className={
              "py-2 px-4 bg-white text-neutral100 rounded-xl flex items-center gap-2 border border-neutral-100 cursour-pointer hover:bg-neutral-100 duration-300 ease-in-out"
            }
          />
        </div>
      </WhiteBox>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {info?.map((data, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl w-full flex justify-between bg-white"
          >
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium text-neutral100">
                {data?.title}
              </p>
              <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
                {data?.value}
              </h6>
            </div>

            <div>
              <div
                className={`p-3 rounded-xl w-fit flex items-center justify-center`}
                style={{
                  backgroundColor: `${data?.color}30`,
                  color: `${data?.color}`,
                }}
              >
                <p className="w-5 h-5">
                  <CalendarColoredSvg
                    className="group-hover:[&>path]:fill-black w-6 h-6"
                    fillColor="currentColor"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
