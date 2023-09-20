import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight'
import { DEFAULT_THEME } from '@mantine/core'
import { IconBrandCss3, IconBrandReact, IconBrandTypescript, IconPackage } from '@tabler/icons-react'

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

  if (fileName === 'yarn') {
    return <IconPackage color={DEFAULT_THEME.colors.blue[4]} size={18} />
  }
  return null
}

export function UiCode({ code }: { code: CodeHighlightTabsCode | CodeHighlightTabsCode[] }) {
  code = Array.isArray(code) ? code : [code]
  return <CodeHighlightTabs getFileIcon={getFileIcon} code={code} />
}
