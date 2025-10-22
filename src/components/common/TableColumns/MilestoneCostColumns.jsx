import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Film, Users, Video, Wallet } from "lucide-react";
import BadgeTable from "../Badge/BadgeTable";


const MilestoneCostColumns = [
    {
        accessorKey: "id",
        header: "Milestone & Cost",
        cell: ({ row }) => {
            return (
                <div className="text-lg space-y-2 text-secondary">
                    <p>{row?.original?.label}</p>
                    <p className="font-semibold">({row?.original?.percentage}-{row?.original?.amount})</p>
                </div>
            )
        }
    },
    {
        header: "Deliverables",
        cell: ({ row }) => (
            <div className="flex items-center  gap-2">
                {
                    !!row?.original?.facilities?.video &&
                    <BadgeTable>
                        <Video className="text-neutral500" size={18} />
                        <p>{row?.original?.facilities?.video} Videos</p>
                    </BadgeTable>
                }
                {
                    !!row?.original?.facilities?.shorts &&
                    <BadgeTable>
                        <Film className="text-neutral500" size={18} />
                        <p>{row?.original?.facilities?.shorts} Shorts</p>
                    </BadgeTable>
                }
                {
                    !!row?.original?.facilities?.watchHours &&
                    <BadgeTable>
                        <Clock className="text-neutral500" size={18} />
                        <p>{row?.original?.facilities?.watchHours} Watch Hours</p>
                    </BadgeTable>
                }
                {
                    !!row?.original?.facilities?.subscribers &&
                    <BadgeTable>
                        <Users className="text-neutral500" size={18} />
                        <p>{row?.original?.facilities?.subscribers} Subscribers</p>
                    </BadgeTable>
                }
                {
                    !!row?.original?.facilities?.yppApproval &&
                    <BadgeTable className={'border-[#1CCC62]'}>
                        <CheckCircle color="#1CCC62" size={18} />
                        <p className="text-[#1CCC62]">YPP Approval</p>
                    </BadgeTable>
                }
            </div>
        ),
    },
    {
        header: "Action",
        cell: ({ row }) => (
            <div className="flex justify-end relative w-full h-full">
                <Button className={'bg-neutral30 text-neutral300 border-transparent hover:text-white hover:bg-primary group absolute -translate-y-1/2'}>
                    <Wallet />
                    {row?.original?.amount}

                    <span className="overflow-hidden transition-all duration-300 ease-in-out max-w-0 opacity-0 group-hover:max-w-[80px] group-hover:opacity-100 translate-x-full group-hover:translate-x-0">
                        & Start
                    </span>
                </Button>
            </div>
        ),
    },
]

export default MilestoneCostColumns;