import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight'
import { IconBrandCss3, IconBrandTypescript, IconPackage } from '@tabler/icons-react'

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <IconBrandTypescript size={18} />
  }

  if (fileName.endsWith('.css')) {
    return <IconBrandCss3 size={18} />
  }

  if (fileName === 'yarn') {
    return <IconPackage size={18} />
  }
  return null
}

export function UiCode({ code }: { code: CodeHighlightTabsCode | CodeHighlightTabsCode[] }) {
  code = Array.isArray(code) ? code : [code]
  return <CodeHighlightTabs getFileIcon={getFileIcon} code={code} />
}
