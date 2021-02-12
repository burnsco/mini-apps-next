import { Button, Center, Heading, HStack } from "@chakra-ui/react"
import { Container } from "@common/index"
import { useState } from "react"
import { GiRollingDiceCup } from "react-icons/gi"
import PageTransition from "src/components/common/Animated/page-transition"
import getRandomInt from "../../utils/getRandomInt"
import RenderDie from "./renderDice"

const DiceRoll = () => {
  const [dieOne, setDieOne] = useState(1)
  const [dieTwo, setDieTwo] = useState(4)

  function handleRoll() {
    setDieOne(getRandomInt())
    setDieTwo(getRandomInt())
  }

  return (
    <PageTransition>
      <Container>
        <Center display="flex" flexDir="column">
          <Heading>Dice</Heading>
          <Button
            leftIcon={<GiRollingDiceCup />}
            size="md"
            onClick={() => handleRoll()}
          >
            Roll
          </Button>
          <HStack mt={4}>
            <RenderDie dieOne={dieOne} />
            <RenderDie dieTwo={dieTwo} />
          </HStack>
        </Center>
      </Container>
    </PageTransition>
  )
}
export default DiceRoll
