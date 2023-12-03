import { Anchor, Box, Code, Group, SimpleGrid, Stack, Table, Text, Title } from '@mantine/core'
import { UiContainer, UiStack } from '@pubkey-ui/core'
import { WalletDisconnectButton, WalletModalButton, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ReactNode } from 'react'
import { UiCode } from '../../../ui/code/ui-code'
import classes from './home-ui-example.module.css'

const demo = `
import { WalletModalProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function App() {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
`

export function HomeUiExample() {
  const versions = [
    {
      mantineVersion: '7.x.x',
      mantineUrl: 'https://mantine.dev/',
      packageVersion: '2.x.x',
      packageUrl: 'https://www.npmjs.com/package/@pubkeyapp/wallet-adapter-mantine-ui',
    },
    {
      mantineVersion: '6.x.x',
      mantineUrl: 'https://v6.mantine.dev/',
      packageVersion: '1.3.3',
      packageUrl: 'https://www.npmjs.com/package/@pubkeyapp/wallet-adapter-mantine-ui/v/1.3.3',
    },
  ]
  const deps = '@pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js'
  return (
    <UiContainer fluid py={0}>
      <UiStack>
        <Title className={classes.title}>Getting started</Title>
        <UiStack>
          <Text>Install dependencies:</Text>
          <UiStack>
            <UiCode code={{ fileName: 'npm', code: `npm install ${deps}`, language: 'shell' }} />
            <UiCode code={{ fileName: 'pnpm', code: `pnpm add ${deps}`, language: 'shell' }} />
            <UiCode code={{ fileName: 'yarn', code: `yarn add ${deps}`, language: 'shell' }} />
          </UiStack>
          <Text>Configure providers and components:</Text>
          <UiCode
            code={{
              fileName: 'app.tsx',
              code: demo,
              language: 'tsx',
            }}
          />
        </UiStack>
        <Box p={0} mt="xl">
          <Title className={classes.title}>Versions</Title>
          <Stack gap="lg" mb="lg">
            <Text style={{ textAlign: 'center' }}>
              This table shows the versions that are compatible with each version of Mantine.
            </Text>
            <Table withColumnBorders withRowBorders withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Mantine version</Table.Th>
                  <Table.Th>Package version</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {versions.map(({ mantineVersion, mantineUrl, packageVersion, packageUrl }) => (
                  <Table.Tr key={mantineVersion}>
                    <Table.Td>
                      <Anchor href={mantineUrl} target="_blank" rel="noopener noreferrer">
                        {mantineVersion}
                      </Anchor>
                    </Table.Td>
                    <Table.Td>
                      <Anchor href={packageUrl} target="_blank" rel="noopener noreferrer">
                        {packageVersion}
                      </Anchor>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </Box>
        <Title className={classes.title}>Components</Title>
        <SimpleGrid
          cols={{
            base: 1,
            md: 3,
          }}
        >
          <DemoCard title="<WalletMultiButton />">
            <div className={classes.controls}>
              <WalletMultiButton className={classes.control} size="lg" />
            </div>
          </DemoCard>
          <DemoCard title="<WalletDisconnectButton />">
            <div className={classes.controls}>
              <WalletDisconnectButton className={classes.control} size="lg" />
            </div>
          </DemoCard>
          <DemoCard title="<WalletModalButton />">
            <div className={classes.controls}>
              <WalletModalButton className={classes.control} size="lg" />
            </div>
          </DemoCard>
        </SimpleGrid>
      </UiStack>
    </UiContainer>
  )
}

function DemoCard({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Stack p="md" style={{ textAlign: 'center' }} gap="md" align="center">
      <Group align="center">
        <Code style={{ fontSize: 16 }}>{title}</Code>
      </Group>
      {children}
    </Stack>
  )
}
