import { useCallback, useState } from 'react'

type InitialState = boolean | (() => boolean)

export function useToggle(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState)

  const on = useCallback(() => setValue(true), [])
  const off = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(prev => !prev), [])

  return [value, { on, off, toggle }] as const
}
