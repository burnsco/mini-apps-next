import {
  Container,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'

const PizzaCalculator: FC<{}> = () => {
  const [numPeople, setNumPeople] = useState(8)
  const [slicesPer, setSlicesPer] = useState(2)

  const parse = (val: any) => val.replace(/^\$/, '')

  function calculate() {
    return Math.ceil((numPeople * slicesPer) / 8)
  }

  return (
    <Container>
      <Heading>Pizza Calculator</Heading>
      <Text>Calculate how many pizzas you need for your party!</Text>
      <NumberInput
        defaultValue={numPeople}
        value={numPeople}
        onChange={valueString => setNumPeople(parse(valueString))}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput>
        <NumberInputField
          defaultValue={slicesPer}
          value={slicesPer}
          onChange={valueString => setSlicesPer(parse(valueString))}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Heading>Pizzas needed: {calculate()}</Heading>
    </Container>
  )
}

export default PizzaCalculator
