"use client";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";
import { PoyDeviceList } from "@/constants/data";
import { Column, ColumnDef } from "@tanstack/react-table";
import { CheckCircle2, Text, XCircle } from "lucide-react";
import Image from "next/image";
import { CellAction } from "./cell-action";
import { CATEGORY_OPTIONS } from "./options";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@radix-ui/react-select";

export const columns: ColumnDef<PoyDeviceList>[] = [
  // {
  //   accessorKey: "photo_url",
  //   header: "IMAGE",
  //   cell: ({ row }) => {
  //     return (
  //       <div className="relative aspect-square">
  //         <Image
  //           src={row.getValue("photo_url")}
  //           alt={row.getValue("name")}
  //           fill
  //           className="rounded-lg"
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "name",
  //   accessorKey: "name",
  //   header: ({ column }: { column: Column<Product, unknown> }) => (
  //     <DataTableColumnHeader column={column} title="Name" />
  //   ),
  //   cell: ({ cell }) => <div>{cell.getValue<Product["name"]>()}</div>,
  //   meta: {
  //     label: "Name",
  //     placeholder: "Search products...",
  //     variant: "text",
  //     icon: Text,
  //   },
  //   enableColumnFilter: true,
  // },
  // {
  //   id: "category",
  //   accessorKey: "category",
  //   header: ({ column }: { column: Column<Product, unknown> }) => (
  //     <DataTableColumnHeader column={column} title="Category" />
  //   ),
  //   cell: ({ cell }) => {
  //     const status = cell.getValue<Product["category"]>();
  //     const Icon = status === "active" ? CheckCircle2 : XCircle;

  //     return (
  //       <Badge variant="outline" className="capitalize">
  //         <Icon />
  //         {status}
  //       </Badge>
  //     );
  //   },
  //   enableColumnFilter: true,
  //   meta: {
  //     label: "categories",
  //     variant: "multiSelect",
  //     options: CATEGORY_OPTIONS,
  //   },
  // },
  // {
  //   accessorKey: "price",
  //   header: "PRICE",
  // },
  // {
  //   accessorKey: "description",
  //   header: "DESCRIPTION",
  // },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "序号",
  },
  {
    accessorKey: "mcNo",
    header: "机台号",
    enableColumnFilter: true,
    meta: {
      label: "机台号",
      placeholder: "查询机台号",
      variant: "text",
      icon: Text,
    },
  },
  {
    accessorKey: "side",
    header: "侧",
  },
  {
    accessorKey: "IsStop",
    header: "PS",
    cell: ({ row }) => {
      const status = row.getValue("IsStop");
      return (
        <Badge variant="outline" className="capitalize bg-green-400">
          {status ? "有效" : "无效"}
        </Badge>
      );
    },
  },
  // {
  //   accessorKey: "description",
  //   header: "节",
  // },
  // {
  //   accessorKey: "description",
  //   header: "锭位",
  // },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
