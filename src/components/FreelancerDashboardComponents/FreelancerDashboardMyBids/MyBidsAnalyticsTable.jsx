"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useGetMyBidsAnalyticsTableData from "@/hooks/FreelancerDashboardHooks/FreelancerMyBidsHooks/useGetMyBidsAnalyticsTableData";


export default function MyBidsAnalyticsTable() {
  const { bidHistory } = useGetMyBidsAnalyticsTableData();

  const awarded = "text-[#1CCC62] bg-[#1CCC62]/15";
    const submitted = "text-[#1447E6] bg-[#1447E6]/15";
  const rejected = "text-[#E52621] bg-[#E52621]/15";
  //   const listed = "text-[#FFC700] bg-[#FFC700]/10";

  const columns = [
    {
      accessorKey: "jobId",
      header: "Job Id",
    },
    {
      accessorKey: "amountBid",
      header: "Amount Bid",
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info?.getValue();
        return (
          <p
            className={`w-28 mx-auto py-1 px-6 rounded-full text-sm ${
              status.toLowerCase() === "awarded"
                ? awarded
                : status?.toLowerCase() === "rejected"
                ? rejected
                : submitted
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      accessorKey: "result",
      header: "Result",
    },
    {
      accessorKey: "date",
      header: "Date",
    },

   
  ];

  const tableInstance = useReactTable({
    columns,
    data: bidHistory,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Bid History & Analytics</h3>
      <Table className={"rounded-lg overflow-hidden text-base text-[#1C1D20]"}>
        <TableHeader>
          {tableInstance?.getHeaderGroups()?.map((headerGroup, idx) => (
            <TableRow key={idx} className={"bg-[#FAA693]"}>
              {headerGroup?.headers?.map((header, idx) => (
                <TableHead
                  key={idx}
                  className="p-4 font-semibold bg-[#FFE3E3] text-center  text-neutral500"
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
                <TableCell key={idx} className="p-4  text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
