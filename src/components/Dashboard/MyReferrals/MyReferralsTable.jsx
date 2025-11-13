"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useMyReferralsTableDataQuery from "@/hooks/Dashboard/useMyReferralsTableDataQuery";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";


export default function MyReferralsTable() {
  const referrals = useMyReferralsTableDataQuery();

  const active = 'text-[#1CCC62] bg-[#1CCC62]/15';
  const pending = 'text-[#FFC700] bg-[#FFC70026]'

  const columns = [
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "referralClient",
      header: "Referral client",
    },
    {
      accessorKey: "source",
      header: "Source",
      cell: (info) => {
        const data = info?.getValue()
        return <p className="py-2 px-4 border border-neutral500 rounded-full text-sm ">{data}</p>
      }
    },
    {
      accessorKey: "ytStartEarnings",
      header: "YTStart Earnings",
    },
    {
      accessorKey: "bonus",
      header: "Your 5% Bonus",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info?.getValue();
        return <p className={`py-1 px-6 rounded-full text-sm ${status.toLowerCase() === 'paid' ? active : pending}`}>{status}</p>

      }
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: referrals,
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
                <TableCell
                  key={idx}
                  className="p-4  text-center"
                >
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
