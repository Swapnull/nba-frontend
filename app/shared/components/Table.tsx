import Link from "next/link";
import _ from "lodash";
interface TableProps {
  data: Array<any>;
  columns: Array<{
    link?: string;
    header: string;
    getBody: (info: any) => React.ReactNode;
  }>;
  rowLink?: (rowInfo: Record<string, unknown>) => string;
  orderBy?: string | ((rowInfo: Record<string, unknown>) => string | number);
  orderDir?: "asc" | "desc";
}

export default function Table({
  data,
  columns,
  rowLink = () => "#",
  orderBy = "",
  orderDir = "asc",
}: TableProps) {
  const headers = columns.map((column) => column.header);

  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={`${header}-${index}`}
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {_.orderBy(data, orderBy, orderDir).map((row, rIndex) => (
          <tr key={`row-${rIndex}`}>
            {columns.map((column, index) => (
              <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-black"
                key={`column-${index}`}
              >
                <Link href={column.link ?? rowLink(row)}>
                  {column.getBody(row)}
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
