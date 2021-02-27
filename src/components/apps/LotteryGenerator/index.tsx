import {
  Badge,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input
} from '@chakra-ui/react'
import { useState } from 'react'
import { GiRollingDiceCup } from 'react-icons/gi'
import PageTransition from 'src/components/common/Animated/page-transition'

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

  function handleGeneration() {
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
    }, 1000)
  }

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
            onClick={() => handleGeneration()}
          >
            Generate
          </Button>
        </Flex>
        <Flex>
          <Box w='full' h='100%'>
            <FormLabel># of Balls</FormLabel>
            <Input type='number' onChange={handleBalls} value={numBalls} />
            <FormLabel># Limit</FormLabel>
            <Input type='number' onChange={handleLimit} value={numLimit} />

            <HStack mt={4}>{renderBalls(numBalls, numLimit)}</HStack>
          </Box>
        </Flex>
      </Box>
    </PageTransition>
  )
}
export default LotterNumberGeneratorPage
