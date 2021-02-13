import { Box, Button, Flex, Heading, HStack } from "@chakra-ui/react"
import { useState } from "react"
import { GiRollingDiceCup } from "react-icons/gi"
import PageTransition from "src/components/common/Animated/page-transition"
import getRandomInt from "../../utils/getRandomInt"
import DiceTable from "./dice-table"
import RenderDie from "./renderDice"

const DiceRoll = () => {
  const [rolling, setRolling] = useState<boolean>(false)

  const [currentGameData, setCurrentGameData] = useState<CurrentGame>({
    number: 1,
    roll: [1, 5]
  })

  const [data, setData] = useState<CurrentGame[]>([])

  function handleRoll() {
    setRolling(true)

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
    setRolling(false)
  }

  const currData = [...data, currentGameData]

  const totalScore = currData
    .map(c => c.roll)
    .map(a => a.reduce((a, b) => a + b))
    .reduce((a, b) => a + b)

  return (
    <PageTransition>
      <Box w="full" h="full">
        <Flex
          w="full"
          height="50px"
          borderTop="2px solid black"
          borderBottom="2px solid black"
        >
          <Button
            isDisabled={rolling}
            leftIcon={<GiRollingDiceCup />}
            size="md"
            onClick={() => handleRoll()}
          >
            Roll
          </Button>
          <Heading>Total Score: ({totalScore})</Heading>
        </Flex>
        <Flex>
          <Box w="50%" h="100%">
            <HStack mt={4}>
              <RenderDie dieOne={currentGameData.roll[0]} />
              <RenderDie dieTwo={currentGameData.roll[1]} />
            </HStack>
          </Box>
          <Box w="50%">
            <DiceTable currentGameData={currData} />
          </Box>
        </Flex>
      </Box>
    </PageTransition>
  )
}
export default DiceRoll
