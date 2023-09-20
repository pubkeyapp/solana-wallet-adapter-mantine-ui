import { createTheme, DEFAULT_THEME, MantineProvider, mergeMantineTheme } from '@mantine/core'

import { createContext, ReactNode, useContext } from 'react'
import { UiColorSchemeProvider } from './ui-color-scheme-provider'

const themeOverride = createTheme({
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
  primaryColor: 'brand',
})
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

const Context = createContext({})

export function UiThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Context.Provider value={{}}>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        <UiColorSchemeProvider>{children}</UiColorSchemeProvider>
      </MantineProvider>
    </Context.Provider>
  )
}

export function useUiTheme() {
  return useContext(Context)
}
