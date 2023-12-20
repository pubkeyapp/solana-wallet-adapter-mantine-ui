import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { DEFAULT_THEME, ScrollArea } from '@mantine/core'
import { IconBrandCss3, IconBrandNpm, IconBrandReact, IconBrandTypescript } from '@tabler/icons-react'

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts')) {
    return <IconBrandTypescript size={18} />
  }
  if (fileName.endsWith('.tsx')) {
    return <IconBrandReact color={DEFAULT_THEME.colors.blue[4]} size={18} />
  }

  if (fileName.endsWith('.css')) {
    return <IconBrandCss3 size={18} />
  }

  if (fileName === 'npm' || fileName === 'pnpm' || fileName === 'yarn') {
    return <IconBrandNpm color={DEFAULT_THEME.colors.red[4]} size={18} />
  }
  return null
}

export function UiCode({ code }: { code: CodeHighlightTabsCode | CodeHighlightTabsCode[] }) {
  code = Array.isArray(code) ? code : [code]
  return (
    <ScrollArea w={{ base: 450, sm: 700, md: 800 }}>
      <CodeHighlightTabs getFileIcon={getFileIcon} code={code} />
    </ScrollArea>
  )
}
