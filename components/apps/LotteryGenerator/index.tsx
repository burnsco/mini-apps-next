import {
  Badge,
  Button,
  Container,
  FormLabel,
  HStack,
  Input,
  VStack
} from '@chakra-ui/react'
import { useToggle } from '@utils/useToggle'
import { useState } from 'react'
import { GiRollingDiceCup } from 'react-icons/gi'
import { setTimeout } from 'timers'

function LotterNumberGeneratorPage() {
  const [generating, { toggle }] = useToggle()
  const [numBalls, setNumBalls] = useState(7)
  const [numLimit, setNumLimit] = useState(99)

  const handleBalls = (e: any) => setNumBalls(e.target.value)
  const handleLimit = (e: any) => setNumLimit(e.target.value)

  function renderBalls() {
    const balls = []
    for (let i = 0; i <= numBalls; i++) {
      balls.push(
        <Badge
          animation='ease-in-out'
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
          <strong>
            {generating
              ? `?`
              : Math.floor(Math.random() * Math.floor(numLimit - 1) + 1)}
          </strong>
        </Badge>
      )
    }
    return balls
  }

  function rollDice() {
    toggle()
    setTimeout(() => {
      toggle()
    }, 1000)
  }

  return (
    <Container border='2px solid red'>
      <Button
        borderBottomRadius='none'
        width='full'
        colorScheme='orange'
        isDisabled={generating}
        leftIcon={<GiRollingDiceCup />}
        size='md'
        onClick={rollDice}
      >
        {generating ? 'Generating' : 'Generate Numbers'}
      </Button>

      <VStack spacing={4} p={5}>
        <FormLabel># of Balls</FormLabel>
        <Input type='number' onChange={handleBalls} value={numBalls} />
        <FormLabel># Limit</FormLabel>
        <Input type='number' onChange={handleLimit} value={numLimit} />

        <HStack>{renderBalls()}</HStack>
      </VStack>
    </Container>
  )
}
export default LotterNumberGeneratorPage
