import { MantineColorScheme, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import { createContext, ReactNode, useContext } from 'react'

export interface UiColorSchemeContext {
  colorScheme: MantineColorScheme
  setColorScheme: (colorScheme: MantineColorScheme) => void
  toggleColorScheme: () => void
}

const Context = createContext<UiColorSchemeContext>({} as UiColorSchemeContext)

export function UiColorSchemeProvider({ children }: { children: ReactNode }) {
  const { setColorScheme } = useMantineColorScheme()
  const colorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true })

  function toggleColorScheme() {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
  }

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  const value: UiColorSchemeContext = {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useUiColorScheme() {
  return useContext(Context)
}
