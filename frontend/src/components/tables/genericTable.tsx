import { AppContext } from "@/app/context-provider";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useContext } from "react";
import { Frame } from "../../../types/parts/frame";
import { useRouter } from "next/navigation";

interface ReactTableProps<T extends object> {
	data: T[];
	/* eslint-disable @typescript-eslint/no-explicit-any */
	columns: ColumnDef<T, any>[];
}

export const GenericTable = <T extends object>({ data, columns }: ReactTableProps<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	const router = useRouter();
	const { userBike, setUserBike } = useContext(AppContext);

	const handleAddFrame = (e: any) => {
		const frameID = e.target.id;
		const frame = data[+frameID] as Frame;
		const newBike = userBike;
		newBike.components.frame = frame;
		setUserBike(newBike);
		router.push("/");
	};

	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
					<div className="overflow-hidden p-2">
						<table className="min-w-full text-center">
							<thead className="border-b bg-gray-50">
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map((header) => (
											<th
												key={header.id}
												className="px-6 py-4 text-xs font-medium text-gray-900"
											>
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext()
													  )}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map((row) => (
									<tr key={row.id} className='border-b" bg-white'>
										{row.getVisibleCells().map((cell) => (
											<td
												className="whitespace-nowrap px-3 py-4 text-xs font-light text-gray-900"
												key={cell.id}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										))}
										<td
											className="whitespace-nowrap px-3 py-4 text-xs font-light text-gray-900"
											key={row.id + "_button"}
										>
											<button
												className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
												id={row.id}
												onClick={handleAddFrame}
											>
												Add Frame
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
