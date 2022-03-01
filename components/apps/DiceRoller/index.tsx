import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer
} from '@chakra-ui/react'
import FlexContainer from '@common/Containers/FlexContainer'
import getRandomInt from '@utils/getRandomInt'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { GiRollingDiceCup } from 'react-icons/gi'
import { useToggle } from '../../../utils/useToggle'
import DiceTable from './dice-table'
import RenderDie from './renderDice'

function DiceRoll() {
  const [rolling, { toggle }] = useToggle()
  const [currentGameData, setCurrentGameData] = useState<CurrentGame>({
    number: 1,
    roll: [0, 0]
  })
  const [data, setData] = useState<CurrentGame[]>([])

  function handleRoll() {
    toggle()

    setCurrentGameData(currentGameData => ({
      ...currentGameData,
      number: currentGameData.number + 1,
      roll: [getRandomInt(), getRandomInt()]
    }))

    setData(data => [
      ...data,
      {
        number: currentGameData.number,
        roll: currentGameData.roll
      }
    ])
    toggle()
  }

  const currData = [...data, currentGameData]
  const totalScore = currData
    .map(c => c.roll)
    .map(a => a.reduce((a, b) => a + b))
    .reduce((a, b) => a + b)

  const tileMaker = (totalScore: number) => {
    const tiles = []
    for (let i = 0; i < 100; i++) {
      tiles.push(
        <Box
          key={`tile-${i}`}
          bg={totalScore === i ? 'blue' : 'tomato'}
          height='20px'
        />
      )
    }
    return tiles
  }

  console.log(`testing config`)

  const Test = motion(Box)

  return (
    <FlexContainer p={2} borderRadius='md'>
      <Box w='full' h='full'>
        <Flex
          w='full'
          p={2}
          align='center'
          height='60px'
          borderTop='2px solid black'
          borderBottom='2px solid black'
        >
          <Button
            isDisabled={rolling}
            leftIcon={<GiRollingDiceCup />}
            size='lg'
            onClick={() => handleRoll()}
          >
            Roll Dice
          </Button>
          <Spacer />
          <HStack>
            <Test
              animate={{
                x: [-8, -12, -16, -10, 0],
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 170, 280, 320, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%']
              }}
            >
              <RenderDie dieOne={currentGameData.roll[0]} />
            </Test>
            <Test
              animate={{
                x: [8, 12, 16, 10, 0],
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 240, 220, 0],
                borderRadius: ['20%', '20%', '60%', '40%', '20%']
              }}
            >
              <RenderDie dieTwo={currentGameData.roll[1]} />
            </Test>
          </HStack>
          <Spacer />
          <Heading>Total Score: ({totalScore})</Heading>
          <Heading as='h4'> {totalScore >= 100 ? `YOU WIN!` : null}</Heading>
        </Flex>

        <SimpleGrid columns={2} w='full' p={2} spacing={2}>
          <Box>
            <SimpleGrid columns={10} row='auto' spacingX='2px' spacingY='2px'>
              {tileMaker(totalScore)}
            </SimpleGrid>
          </Box>

          <Box>
            <DiceTable currentGameData={currData} />
          </Box>
        </SimpleGrid>
      </Box>
    </FlexContainer>
  )
}
export default DiceRoll
