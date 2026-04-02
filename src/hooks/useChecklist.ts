import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'zelda-botw-checklist'

interface ChecklistState {
  [key: string]: boolean  // itemId -> found/not found
}

export function useChecklist(category: string) {
  const [items, setItems] = useState<ChecklistState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return {}
      const data = JSON.parse(raw)
      return data[category] || {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    let raw: string | null = localStorage.getItem(STORAGE_KEY)
    const allData: Record<string, ChecklistState> = raw ? JSON.parse(raw) : {}
    allData[category] = items
    raw = JSON.stringify(allData)
    localStorage.setItem(STORAGE_KEY, raw)
  }, [category, items])

  const toggle = useCallback((id: string) => {
    setItems(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const set = useCallback((id: string, found: boolean) => {
    setItems(prev => ({ ...prev, [id]: found }))
  }, [])

  const clear = useCallback(() => {
    setItems({})
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const allData = JSON.parse(raw)
      delete allData[category]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allData))
    } catch {}
  }, [category])

  const totalCount = Object.keys(items).filter(id => items[id]).length

  return { items, toggle, set, clear, totalCount }
}
