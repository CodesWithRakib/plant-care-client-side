import React, { useEffect, useState, useMemo } from "react";
import PlantCard from "../../components/PlantCard";
import NoPlants from "../../components/NoPlants";
import Loading from "../Loading";
import useTitle from "../../hooks/useTitle";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { LayoutGrid, Table } from "lucide-react";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("card");

  useTitle("Green Nest - All Plants");

  useEffect(() => {
    fetch("https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch plants:", error);
        setLoading(false);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => (
          <img
            src={row.original.image || "/plant-placeholder.jpg"}
            alt={row.original.plantName}
            className="w-16 h-16 object-cover rounded-md mx-auto"
          />
        ),
      },
      {
        accessorKey: "plantName",
        header: "Name",
        cell: ({ row }) => (
          <span className="font-semibold text-gray-800 dark:text-white">
            {row.original.plantName}
          </span>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
          <span className="capitalize">{row.original.category}</span>
        ),
      },
      {
        accessorKey: "wateringFrequency",
        header: "Watering Frequency",
      },
      {
        accessorKey: "careLevel",
        header: "Care Level",
        cell: ({ row }) => (
          <span className="capitalize">{row.original.careLevel}</span>
        ),
      },
      {
        accessorKey: "nextWateringDate",
        header: "Next Watering",
        cell: ({ row }) =>
          new Date(row.original.nextWateringDate).toLocaleDateString(),
      },
    ],
    []
  );

  const table = useReactTable({
    data: plants,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <Loading />;
  if (!plants.length) return <NoPlants message="No plants found." />;

  return (
    <div className="min-h-screen bg-green-50 dark:bg-zinc-900 py-10 px-4 sm:px-6 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700 dark:text-green-400">
        All Plants
      </h1>

      <div className="flex justify-end mb-6 items-center gap-3">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          View:
        </span>
        <div className="inline-flex rounded-md shadow-sm border border-zinc-300 dark:border-zinc-600 overflow-hidden">
          <button
            onClick={() => setViewMode("card")}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition ${
              viewMode === "card"
                ? "bg-green-600 text-white"
                : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            <LayoutGrid size={18} />
            <span className="hidden sm:inline">Card</span>
          </button>

          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition ${
              viewMode === "table"
                ? "bg-green-600 text-white"
                : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            <Table size={18} />
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>
      </div>

      {/* View Modes */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block w-full rounded-lg shadow-md overflow-hidden">
            <div className="overflow-auto max-h-[500px]">
              <table className="min-w-full overflow-x-auto text-sm text-left bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200">
                <thead className="text-xs uppercase bg-green-100 dark:bg-zinc-800 dark:text-gray-300 sticky top-0 z-10">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-6 py-4 whitespace-nowrap"
                          colSpan={header.colSpan}
                        >
                          {flexRender(
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
                    <tr
                      key={row.id}
                      className="border-b border-gray-200 dark:border-zinc-700 hover:bg-green-50 dark:hover:bg-zinc-800"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-3 whitespace-nowrap"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Table */}
          <div className="md:hidden w-full rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-[700px] text-sm text-left bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200">
              <thead className="text-xs uppercase bg-green-100 dark:bg-zinc-800 dark:text-gray-300">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-4 whitespace-nowrap"
                        colSpan={header.colSpan}
                      >
                        {flexRender(
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
                  <tr
                    key={row.id}
                    className="border-b border-gray-200 dark:border-zinc-700 hover:bg-green-50 dark:hover:bg-zinc-800"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-3 whitespace-nowrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AllPlants;
