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
import useYtOverviewPendingOrdersTableDataQuery from "@/hooks/YtSrvicesDashboardHooks/useYtOverviewPendingOrdersTableDataQuery";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

export default function YtServicesOverviewPendingOrdersTable() {
  const pendingOrders = useYtOverviewPendingOrdersTableDataQuery();

  const columns = [
    {
      accessorKey: "orderDate",
      header: "Order Date",
    },
    {
      accessorKey: "services",
      header: "Services",
      cell: (info) => {
        const data = info?.getValue();
        return (
          <p className="text-xs py-1 px-4 border border-neutral200 rounded-3xl w-fit mx-auto">
            {data}
          </p>
        );
      },
    },
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "item",
      header: "Ttem",
    },
     {
      accessorKey: "deliveryDate",
      header: "Delivery Date",
    },

    
  ];

  const tableInstance = useReactTable({
    columns,
    data: pendingOrders,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full p-8 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold mb-4">Pending Orders</p>
        <button type="button" className="flex items-center gap-2 text-lg text-neutral500 cursor-pointer bg-card py-2 px-4 rounded-full">
          <p className="w-6 h-6">
            <EyeSvg />
          </p>
          <p>View All Deliveries</p>
        </button>
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
