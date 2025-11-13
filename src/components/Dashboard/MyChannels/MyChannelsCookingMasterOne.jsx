"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useMyChannelsCoockingMasterQuery from "@/hooks/Dashboard/useMyChannelsCoockingMasterQuery";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function MyChannelsCookingMasterOne() {
  const milestones = useMyChannelsCoockingMasterQuery();

  const columns = [
    {
      accessorKey: "milestone",
      header: "Milestones",
    },
    {
      accessorKey: "deliverables",
      header: "Deliverables",
    },
    {
      accessorKey: "deliveryStatus",
      header: "Delivery Status",
    },
    {
      accessorKey: "milestoneAmount",
      header: "Milestone Amount",
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: milestones,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="bg-white w-full p-8 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2">
            <h6 className="text-2xl font-semibold leading-9 text-[#1C1D20]">
              Cooking Master
            </h6>
            <p>Premium Plan : $2,65.000 • Created Jan 15, 2024</p>
          </div>
          <div className="">
            <Link href={'/dashboard/my-channels/cooking-master/my-channel-details'} className="py-3 px-6 rounded-xl bg-[#E52621] text-lg text-white font-medium leading-[27px] flex items-center justidy-center mx-auto cursor-pointer hover:bg-red-700 duration-300">
              View performance
            </Link>
          </div>
        </div>

        <Table
          className={"rounded-lg overflow-hidden text-base text-[#1C1D20]"}
        >
          <TableHeader>
            {tableInstance?.getHeaderGroups()?.map((headerGroup, idx) => (
              <TableRow key={idx} className={"bg-[#FAA693]"}>
                {headerGroup?.headers?.map((header, idx) => (
                  <TableHead
                    key={idx}
                    className="p-4 font-semibold border bg-[#FAA693] text-center border-[#A6AAB5] border-collapse text-white"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {tableInstance?.getRowModel()?.rows?.map((row, idx) => (
              <TableRow key={idx}>
                {row?.getVisibleCells()?.map((cell, idx) => (
                  <TableCell
                    key={idx}
                    className="p-4 border border-[#A6AAB5] border-collapse text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
