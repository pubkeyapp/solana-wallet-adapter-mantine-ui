import { Button } from '@mantine/core'
import styles from './app.module.css'
import '@mantine/core/styles.css'
import { UiThemeToggle } from './ui/theme-toggle/ui-theme-toggle'
import { UiThemeProvider } from './ui/theme/ui-theme-provider'

export function App() {
  return (
    <UiThemeProvider>
      <div className={styles.app}>
        <div>Hello World</div>
        <UiThemeToggle />
      </div>

      <Button>THIS IS A BUTTON</Button>
    </UiThemeProvider>
  )
}
