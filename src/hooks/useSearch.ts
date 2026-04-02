import { useMemo, useState } from 'react'

export function useSearch<T>(data: T[], keys: (keyof T)[]) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return data
    const q = query.toLowerCase()
    return data.filter((item) =>
      keys.some((key) => {
        const value = item[key]
        if (typeof value === 'string') return value.toLowerCase().includes(q)
        if (Array.isArray(value)) return value.some((v) => typeof v === 'string' && v.toLowerCase().includes(q))
        return false
      }),
    )
  }, [data, query, keys])

  return { query, setQuery, filtered }
}
