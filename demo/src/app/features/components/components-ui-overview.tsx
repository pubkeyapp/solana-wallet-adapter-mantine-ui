import { Button, ButtonProps, Divider, Group, SimpleGrid } from '@mantine/core'
import { UiDebug, UiGroup, UiStack } from '@pubkey-ui/core'
import {
  WalletDisconnectButton,
  WalletModalButton,
  WalletMultiButton,
  WalletMultiIcon,
} from '@pubkeyapp/wallet-adapter-mantine-ui'
import { AppDemo } from '../../ui'
import { useEffect, useState } from 'react'

export function ComponentsUiOverview() {
  return (
    <UiStack>
      <Divider label="Buttons" />
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <AppDemo title="WalletMultiButton">
          <WalletMultiButton size="lg" />
        </AppDemo>
        <AppDemo title="WalletDisconnectButton">
          <WalletDisconnectButton size="lg" />
        </AppDemo>
        <AppDemo title="WalletModalButton">
          <WalletModalButton size="lg" />
        </AppDemo>
        <AppDemo title="WalletMultiIcon">
          <WalletMultiIcon size="lg" />
        </AppDemo>
      </SimpleGrid>
      <Divider label="Random" />
      <DemoRandom />
      <Divider label="Button variants" />
      <DemoVariants />
      <Divider label="Button sizes" />
      <DemoSizes />
      <Divider label="Button radius" />
      <DemoRadius />
      <Divider label="Button colors" />
      <ButtonColors />
    </UiStack>
  )
}

const sizes: ButtonProps['size'][] = ['xl', 'lg', 'md', 'sm', 'xs']
const radii: ButtonProps['radius'][] = ['xs', 'sm', 'md', 'lg', 'xl']
const variants: ButtonProps['variant'][] = ['default', 'filled', 'light', 'outline', 'subtle', 'transparent', 'white']
const colors: ButtonProps['color'][] = [
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
  'gray',
]

function DemoRandom() {
  const [size, setSize] = useState<ButtonProps['size']>('md')
  const [radius, setRadius] = useState<ButtonProps['radius']>('md')
  const [variant, setVariant] = useState<ButtonProps['variant']>('default')
  const [color, setColor] = useState<ButtonProps['color']>('blue')

  function randomize() {
    setSize(sizes[Math.floor(Math.random() * sizes.length)])
    setRadius(radii[Math.floor(Math.random() * radii.length)])
    setVariant(variants[Math.floor(Math.random() * variants.length)])
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }
  useEffect(() => {
    randomize()
  }, [])

  return (
    <UiGroup align="start" justify="space-around">
      <Button onClick={randomize}>Randomize</Button>
      <Group justify="center">
        <WalletMultiButton size={size} radius={radius} variant={variant} color={color} />
        <WalletMultiIcon size={size} radius={radius} variant={variant} color={color} />
      </Group>
      <UiDebug data={{ size, radius, variant, color }} open hideButton />
    </UiGroup>
  )
}

function DemoSizes() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }}>
      {sizes.map((size) => (
        <AppDemo key={size} title={`size="${size}"`}>
          <Group>
            <WalletMultiButton size={size} />
            <WalletMultiIcon size={size} />
          </Group>
        </AppDemo>
      ))}
    </SimpleGrid>
  )
}

function DemoRadius() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }}>
      {radii.map((radius) => (
        <AppDemo key={radius} title={`radius="${radius}"`}>
          <Group>
            <WalletMultiButton radius={radius} />
            <WalletMultiIcon radius={radius} />
          </Group>
        </AppDemo>
      ))}
    </SimpleGrid>
  )
}

function DemoVariants() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
      {variants.map((variant) => (
        <AppDemo key={variant} title={`variant="${variant}"`}>
          <Group>
            <WalletMultiButton variant={variant} />
            <WalletMultiIcon variant={variant} />
          </Group>
        </AppDemo>
      ))}
    </SimpleGrid>
  )
}

function ButtonColors() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
      {colors.map((color) => (
        <AppDemo key={color} title={`color="${color}"`}>
          <Group>
            <WalletMultiButton color={color} />
            <WalletMultiIcon color={color} />
          </Group>
        </AppDemo>
      ))}
    </SimpleGrid>
  )
}
