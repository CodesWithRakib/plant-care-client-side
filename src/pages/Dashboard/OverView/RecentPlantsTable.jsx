import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";

const RecentPlantsTable = ({ plants }) => {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "plantName",
        header: "Name",
        cell: ({ row }) => {
          const plant = row.original;
          return (
            <div className="flex items-center gap-3">
              <img
                src={plant.image || "/plant-placeholder.jpg"}
                alt={plant.plantName}
                className="w-10 h-10 rounded-full object-cover ring-1 ring-green-200 dark:ring-green-700"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {plant.plantName}
                </p>
                {plant.scientificName && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                    {plant.scientificName}
                  </p>
                )}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: (info) => (
          <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 capitalize">
            {info.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Date Added",
        cell: (info) => (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(info.getValue()).toLocaleDateString()}
          </span>
        ),
      },
      {
        accessorKey: "healthStatus",
        header: "Status",
        cell: (info) => {
          const status = info.getValue();
          const color =
            status === "healthy"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : status === "needs-care"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
          return (
            <span
              className={`px-2 inline-flex text-xs font-semibold rounded-full capitalize ${color}`}
            >
              {status}
            </span>
          );
        },
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const plant = row.original;
          return (
            <div className="flex justify-end gap-3 text-lg">
              <Link
                to={`/dashboard/plants/${plant._id}`}
                title="View Details"
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <FiEye />
              </Link>
              <Link
                to={`/dashboard/plants/${plant._id}/edit`}
                title="Edit Plant"
                className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                <FiEdit />
              </Link>
              <button
                onClick={() => alert(`Delete ${plant.plantName}`)}
                title="Delete Plant"
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <FiTrash2 />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: plants || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!plants || plants.length === 0) {
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 text-center shadow-sm">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          🌱 No plants found. Add your first plant to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto space-y-6">
      {/* Desktop Table */}
      <table className="hidden md:table min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300"
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
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="md:hidden space-y-5">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={plant.image || "/plant-placeholder.jpg"}
                alt={plant.plantName}
                className="h-12 w-12 rounded-full object-cover border border-gray-300 dark:border-gray-700"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {plant.plantName}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                  {plant.scientificName}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  plant.healthStatus === "healthy"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : plant.healthStatus === "needs-care"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {plant.healthStatus}
              </span>
            </div>

            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
              <span className="capitalize">{plant.category}</span>
              <span>{new Date(plant.createdAt).toLocaleDateString()}</span>
            </div>

            <div className="mt-3 flex justify-end gap-4 text-sm">
              <Link
                to={`/dashboard/plants/${plant._id}`}
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <FiEye className="inline mr-1" /> View
              </Link>
              <Link
                to={`/dashboard/plants/${plant._id}/edit`}
                className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                <FiEdit className="inline mr-1" /> Edit
              </Link>
              <button
                onClick={() => alert(`Delete ${plant.plantName}`)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <FiTrash2 className="inline mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPlantsTable;
