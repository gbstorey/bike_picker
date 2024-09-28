'use client'

import { GenericTable } from "@/components/tables/genericTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Frame } from "../../../types/parts/frame";
import { frames } from "../../../utils/dummy";
import Image from "next/image";
import {CustomLink} from "@/components/customLink";

const columnHelper = createColumnHelper<Frame>();

const columns = [
  columnHelper.accessor("imgURL", {
    cell: (info) => (
      <Image
        src={info.getValue()}
        width={70}
        height={70}
        alt={`Photo of part`}
      />
    ),
    header: () => <span>Photo</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("priceUSD", {
    cell: (info) => `$${info.getValue().toFixed(2)}`,
    header: () => <span>Price</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("wheelSizeInches", {
    cell: (info) => info.getValue(),
    header: () => <span>Wheel Size (in.)</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("suspensionMM", {
    cell: (info) => info.getValue(),
    header: () => <span>Suspension (mm.)</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("available", {
    cell: (info) => `${info.getValue()}`,
    header: () => <span>Available</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("colors", {
    cell: (info) => `${info.getValue().toString().replaceAll(",", ", ")}`,
    header: () => <span>Colors</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("size", {
    cell: (info) => `${info.getValue().toString().replaceAll(",", ", ")}`,
    header: () => <span>Sizes</span>,
    footer: (info) => info.column.id,
  }),
];

console.log('hello world');

export default function framePage() {
    return (
        <main className="m-4">
        <CustomLink href="/" linkText="Return Home"/>
        <section id="frames" className="flex flex-wrap gap-4">
        <GenericTable data={frames} columns={columns} />
        </section>
        </main>
    );
}