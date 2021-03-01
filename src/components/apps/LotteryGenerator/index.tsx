import {
  Badge,
  Button,
  Container,
  FormLabel,
  HStack,
  Input,
  VStack
} from '@chakra-ui/react'
import FlexContainer from '@common/Containers/FlexContainer'
import { useState } from 'react'
import { GiRollingDiceCup } from 'react-icons/gi'
import { setTimeout } from 'timers'

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const LotterNumberGeneratorPage = () => {
  const [generating, setGenerating] = useState<boolean>(false)
  const [numBalls, setNumBalls] = useState(7)
  const [numLimit, setNumLimit] = useState(99)

  const handleBalls = (e: any) => setNumBalls(e.target.value)
  const handleLimit = (e: any) => setNumLimit(e.target.value)

  function renderBalls(numberOfBalls: number, numberLimit: number) {
    const balls = []
    for (let i = 0; i <= numberOfBalls; i++) {
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
          <strong>
            {Math.floor(Math.random() * Math.floor(numberLimit - 1) + 1)}
          </strong>
        </Badge>
      )
    }
    return balls
  }

  return (
    <Container>
      <FlexContainer w='full' boxShadow='2xl' h='full' borderRadius='lg'>
        <Button
          borderBottomRadius='none'
          width='full'
          colorScheme='orange'
          isDisabled={generating}
          leftIcon={<GiRollingDiceCup />}
          size='md'
          onClick={() => {
            setGenerating(true)
            setTimeout(() => {
              setGenerating(false)
            }, 500)
          }}
        >
          {generating ? 'Generating' : 'Generate Numbers'}
        </Button>

        <VStack spacing={4} p={5}>
          <FormLabel># of Balls</FormLabel>
          <Input type='number' onChange={handleBalls} value={numBalls} />
          <FormLabel># Limit</FormLabel>
          <Input type='number' onChange={handleLimit} value={numLimit} />

          <HStack>{renderBalls(numBalls, numLimit)}</HStack>
        </VStack>
      </FlexContainer>
    </Container>
  )
}
export default LotterNumberGeneratorPage
