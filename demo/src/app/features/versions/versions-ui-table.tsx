import { Anchor, Box, rem, Stack, Table, Text, Title } from '@mantine/core'

export function VersionsUiTable() {
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
  return (
    <Box>
      <Title style={{ textAlign: 'center', fontWeight: 800, fontSize: rem(40) }}>Versions</Title>
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
  )
}
