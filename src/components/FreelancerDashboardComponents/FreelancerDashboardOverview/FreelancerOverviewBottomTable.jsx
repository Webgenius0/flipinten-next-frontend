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
import useGetFreelancerOverviewActiveJovTableData from "@/hooks/FreelancerDashboardHooks/useGetFreelancerOverviewActiveJovTableData";
import React from "react";
import ArrowSvg from "@/components/svg/ArrowSvg";

export default function FreelancerOverviewBottomTable() {
  const { jobList } = useGetFreelancerOverviewActiveJovTableData();

  const progress = "text-[#0048FF] bg-[#0048FF]/15";
  const review = "text-[#5500FF] bg-[#5500FF26]";
  const revision = "text-[#FF9D00] bg-[#FF9D00]/15";

  const columns = [
    {
      accessorKey: "jobId",
      header: "Job Id",
    },
    {
      accessorKey: "projectTitle",
      header: "Project Title",
      cell: (info) => {
        const data = info?.getValue();
        return (
          <p className="py-2 px-4 border border-neutral500 rounded-full text-sm ">
            {data}
          </p>
        );
      },
    },
    {
      accessorKey: "client",
      header: "Client",
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info?.getValue();
        return (
          <p
            className={`py-1 px-6 rounded-full text-sm ${
              status.toLowerCase() === "revision"
                ? revision
                : status?.toLowerCase() === "review"
                ? review
                : progress
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      accessorKey: "deadline",
      header: "Deadline",
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: (info) => {
        const data = info?.getValue();
        return (
          <button className="w-[120px] mx-auto py-2 px-4 border border-[#1CCC62] text-[#1CCC62] bg-[white] rounded-sm text-sm flex items-center justify-center gap-2 cursor-pointer ">
            {data}
            <p className="w-4 h-4">
              <ArrowSvg fillColor={'#1CCC62'} strokeWidth={1} />
            </p>
          </button>
        );
      },
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: jobList,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full p-8 rounded-2xl">
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
