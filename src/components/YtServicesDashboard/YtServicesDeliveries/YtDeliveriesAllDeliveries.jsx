"use client";
import DownloadSvg from "@/components/svg/DashboardSvg/DownloadSvg";
import EyeSvg from "@/components/svg/DashboardSvg/EyeSvg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useYtDeliveriesAllDeliveriesTableData from "@/hooks/YtSrvicesDashboardHooks/useYtDeliveriesAllDeliveriesTableData";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

export default function YtDeliveriesAllDeliveries() {
  const deliveries = useYtDeliveriesAllDeliveriesTableData();

  const columns = [
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "services",
      header: "Service",
    },
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "file",
      header: "File",
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
              <DownloadSvg />
            </p>
            <p className="underline">{data}</p>
          </button>
        );
      },
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: deliveries,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full p-8 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold mb-4">All Deliveries</p>
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
