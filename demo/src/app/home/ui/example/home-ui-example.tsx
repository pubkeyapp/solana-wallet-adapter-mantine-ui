import { Anchor, Box, Code, Container, Group, Stack, Table, Text, Title } from '@mantine/core'
import { WalletDisconnectButton, WalletModalButton, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ReactNode } from 'react'
import { UiCode } from '../../../ui'
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
      packageUrl: 'https://npm.im/@pubkeyapp/wallet-adapter-mantine-ui',
    },
    {
      mantineVersion: '6.x.x',
      mantineUrl: 'https://v6.mantine.dev/',
      packageVersion: '1.3.3',
      packageUrl: 'https://npm.im/@pubkeyapp/wallet-adapter-mantine-ui/v/1.3.3',
    },
  ]
  return (
    <Container size="md">
      <Stack gap="lg">
        <Title className={classes.title}>Getting started</Title>
        <Stack gap="lg" mb="lg">
          <Text>Install dependencies:</Text>
          <UiCode
            code={{
              fileName: 'yarn',
              code: `yarn add @pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js`,
              language: 'shell',
            }}
          />
          <Text>Configure providers and components:</Text>
          <UiCode
            code={{
              fileName: 'app.tsx',
              code: demo,
              language: 'tsx',
            }}
          />
        </Stack>
        <Container p={0} size={600} mt="xl">
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
                        @pubkeyapp/wallet-adapter-mantine-ui@{packageVersion}
                      </Anchor>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </Container>
        <Title className={classes.title}>Components</Title>
        <Stack gap="lg" mb="lg">
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
        </Stack>
      </Stack>
    </Container>
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
