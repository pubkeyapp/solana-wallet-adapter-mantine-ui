import { createTheme, MantineProvider, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core'

import { createContext, ReactNode, useContext } from 'react'

export interface UiThemeProviderContext {
  name: string
}

const themeOverride = createTheme({
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
  primaryColor: 'brand',
})
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

const UiThemeContext = createContext<UiThemeProviderContext>({} as UiThemeProviderContext)

export function UiThemeProvider({ children }: { children: ReactNode }) {
  const value: UiThemeProviderContext = {
    name: 'UiTheme',
  }
  return (
    <UiThemeContext.Provider value={value}>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        {children}
      </MantineProvider>
    </UiThemeContext.Provider>
  )
}

export function useUiTheme() {
  return useContext(UiThemeContext)
}
