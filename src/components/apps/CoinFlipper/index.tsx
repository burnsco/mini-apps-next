import {
  Badge,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input
} from '@chakra-ui/react'
import PageTransition from '@common/Animated/page-transition'
import { useToggle } from '@utils/useToggle'
import { useState } from 'react'
import { GiRollingDiceCup } from 'react-icons/gi'
import { setTimeout } from 'timers'

const CoinFlipApp = () => {
  const [generating, { toggle }] = useToggle()
  const [numBalls, setNumBalls] = useState(7)

  const handleBalls = (e: any) => setNumBalls(e.target.value)

  function renderBalls(numberOfBalls: number) {
    const balls = []
    for (let i = 0; i <= numberOfBalls; i++) {
      const coin = Math.floor(Math.random() * Math.floor(2) + 1)
      const renderCoin = <>{coin === 1 ? 'HEADS' : 'TAILS'}</>
      balls.push(
        <Badge
          key={`ball-${i}`}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: 2,
            height: 50,
            width: 50,
            borderRadius: 'full'
          }}
        >
          <strong>{generating ? '?' : renderCoin}</strong>
        </Badge>
      )
    }
    return balls
  }

  return (
    <PageTransition>
      <Box w='full' h='full'>
        <Flex
          w='full'
          height='50px'
          borderTop='2px solid black'
          borderBottom='2px solid black'
        >
          <Button
            isDisabled={generating}
            leftIcon={<GiRollingDiceCup />}
            size='md'
            onClick={() => {
              toggle()
              setTimeout(() => {
                toggle()
              }, 500)
            }}
          >
            Generate
          </Button>
        </Flex>
        <Flex>
          <Box w='full' h='100%'>
            <FormLabel># of Coins</FormLabel>
            <Input type='number' onChange={handleBalls} value={numBalls} />
            <HStack mt={4}>{renderBalls(numBalls)}</HStack>
          </Box>
        </Flex>
      </Box>
    </PageTransition>
  )
}
export default CoinFlipApp
