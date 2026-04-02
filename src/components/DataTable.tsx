import React from 'react'

export interface Column<T> {
  key: keyof T
  label: string
  render?: (value: unknown, item: T) => React.ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  onRowClick?: (item: T) => void
}

export default function DataTable<T>({
  columns,
  data,
  onRowClick,
}: DataTableProps<T>) {
  const renderCell = (item: T, col: Column<T>) => {
    const value = item[col.key] as unknown
    return col.render ? col.render(value, item) : String(value ?? '')
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-card border-b border-border">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="text-left px-4 py-2.5 text-text-secondary font-medium"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className={`border-b border-border bg-background hover:bg-card transition-colors ${
                onRowClick ? 'cursor-pointer' : ''
              }`}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-2.5 text-text-primary">
                  {renderCell(item, col)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="py-8 text-center text-text-secondary text-sm">
          데이터가 없습니다
        </div>
      )}
    </div>
  )
}
