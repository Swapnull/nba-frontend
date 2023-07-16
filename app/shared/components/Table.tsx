import Link from "next/link";

interface TableProps {
  data: Array<any>;
  headers: Array<string>;
  columns: Array<{
    link?: string;
    children: (info) => React.ReactNode;
  }>;
  rowLink?: (rowInfo) => string;
}

export default function Table({
  data,
  headers,
  columns,
  rowLink = () => "#",
}: TableProps) {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={`${header}-${index}`}
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Name
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rIndex) => (
          <tr key={`row-${rIndex}`}>
            {columns.map((column, index) => (
              <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-black"
                key={`column-${index}`}
              >
                <Link href={column.link ?? rowLink(row)}>
                  {column.children(row)}
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
