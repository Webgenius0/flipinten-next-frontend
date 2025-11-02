"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useBillingTableDataQuery from "@/hooks/Dashboard/useBillingTableDataQuery";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

export default function TransactionHistoryTable() {
  const billingHistory = useBillingTableDataQuery();

  const active = "text-[#1CCC62] bg-[#1CCC62]/15";
  const pending = "text-[#FFC700] bg-[#FFC70026]";

  const columns = [
    {
      accessorKey: "orderDate",
      header: "Order Date",
    },
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "channel",
      header: "Channel",
    },
    {
      accessorKey: "invoiceId",
      header: "Invoice Id",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info?.getValue();
        return (
          <p
            className={`py-1 px-6 rounded-full text-sm ${
              status.toLowerCase() === "paid" ? active : pending
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: (info) => {
        const data = info?.getValue();
        return (
          <button type="button" className="underline cursor-pointer">
            {data}
          </button>
        );
      },
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: billingHistory,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full p-8 rounded-2xl">
      <p className="text-2xl font-bold mb-4">Transaction History</p>
      <Table className={"rounded-lg overflow-hidden text-base text-[#1C1D20]"}>
        <TableHeader>
          {tableInstance?.getHeaderGroups()?.map((headerGroup, idx) => (
            <TableRow key={idx} className={"bg-[#FAA693]"}>
              {headerGroup?.headers?.map((header, idx) => (
                <TableHead
                  key={idx}
                  className="p-4 font-semibold bg-[#1CCC62] text-center text-white border border-neutral400 border-collapse"
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
                  className="p-4  text-center border border-[#A6AAB5] border-collapse"
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
