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
import useGetFreelancerTaskDetailsTableData from "@/hooks/FreelancerDashboardHooks/FreelancerTasks/useGetFreelancerTaskDetailsTableData";


export default function FreelancerTaskDetailsTable() {
  const { tasks } = useGetFreelancerTaskDetailsTableData();

  const approved = "text-[#1CCC62] bg-[#1CCC62]/15";
  const submitted = "text-[#1447E6] bg-[#1447E6]/15";
  const pending = "text-[#E52621] bg-[#E52621]/15";
  //   const listed = "text-[#FFC700] bg-[#FFC700]/10";

  const columns = [
    {
      accessorKey: "deliverable",
      header: "deliverable",
    },
    {
      accessorKey: "format",
      header: "Format",
      cell: (info) => (
        <p className="py-1 px-2 bg-neutral30 rounded-xl">{info?.getValue()}</p>
      ),
    },
    {
      accessorKey: "version",
      header: "Version",
    },
    {
      accessorKey: "uploadedOn",
      header: "Uploaded On",
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info?.getValue();
        return (
          <p
            className={`w-28 mx-auto py-1 px-6 rounded-full text-sm ${
              status.toLowerCase() === "approved"
                ? approved
                : status?.toLowerCase() === "pending"
                ? pending
                : submitted
            }`}
          >
            {status}
          </p>
        );
      },
    },
   {
    accessorKey: 'action',
    headers: 'Action',
    cell: (info) => {
        const data = info?.getValue();
        return <button className={`text-sm py-0.5 px-3 rounded-xl cursor-pointer duration-300 ease-in-out ${data.toLowerCase() === 'replace' && 'text-neutral100 border border-neutral100 hover:bg-neutral30 '} ${data?.toLowerCase() === 'upload' && 'text-white bg-[#1CCC62] border border-[#1CCC62] hover:bg-white hover:text-[#1CCC62]'}`}>
           {data}
        </button>
    }
   }
  ];

  const tableInstance = useReactTable({
    columns,
    data: tasks,
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
