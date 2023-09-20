import { Button, Container, Text, Title } from '@mantine/core'
import { WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import classes from './home-ui-hero.module.css'

export function HomeUiHero() {
  return (
    <Container className={classes.wrapper} size="xl">
      <div className={classes.inner}>
        <Title className={classes.title}>
          The{' '}
          <Text
            component="span"
            className={classes.highlight}
            inherit
            variant="gradient"
            gradient={{
              from: '#9945FF',
              to: '#14F195',
              deg: 30,
            }}
          >
            Solana
          </Text>{' '}
          Wallet Adapter for{' '}
          <Text
            component="span"
            className={classes.highlight}
            inherit
            variant="gradient"
            gradient={{
              from: 'blue',
              to: 'teal.4',
              deg: 120,
            }}
          >
            Mantine
          </Text>
          !
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Easily integrate Solana wallets into your Mantine app with this simple, easy-to-use adapter with a familiar
            UI and API.
          </Text>
        </Container>

        <div className={classes.controls}>
          <WalletMultiButton className={classes.control} size="lg" variant="default" color="gray" />
          <Button className={classes.control} size="lg">
            Get started
          </Button>
        </div>
      </div>
    </Container>
  )
}
