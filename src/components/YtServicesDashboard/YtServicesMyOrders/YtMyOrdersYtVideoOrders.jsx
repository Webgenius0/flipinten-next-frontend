"use client";

import EyeSvg from "@/components/svg/DashboardSvg/EyeSvg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useYtMyOrdersYtVideosOrdrsTableDataQuery from "@/hooks/YtSrvicesDashboardHooks/useYtMyOrdersYtVideosOrdrsTableDataQuery";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

export default function YtMyOrdersYtVideoOrders() {
  const orders = useYtMyOrdersYtVideosOrdrsTableDataQuery();

  const columns = [
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "packages",
      header: "Packages",
    },
    {
      accessorKey: "startDate",
      header: "Start Date",
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: (info) => {
        const data = info?.getValue();
        return <p className="text-[#1CCC62]">{data}</p>;
      },
    },
    {
      accessorKey: "videos",
      header: "Videos",
    },
    {
      accessorKey: "deliveryDate",
      header: "Delivery Date",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const data = info?.getValue();
        return (
          <p className="text-xs py-1 px-4 bg-[#0048FF]/10 text-[#0048FF] rounded-3xl w-fit mx-auto">
            {data}
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
          <button
            type="button"
            className="w-fit mx-auto cursor-pointer flex items-center justify-center gap-2"
          >
            <p className="w-6 h-6">
              <EyeSvg />
            </p>
            <p className="">{data}</p>
          </button>
        );
      },
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: orders,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full p-8 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold mb-4">YT Videos Orders</p>
      </div>
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
