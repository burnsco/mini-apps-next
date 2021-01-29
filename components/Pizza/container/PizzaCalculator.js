import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Result from '../components/Result'

const PizzaCalculator = ({
  numberOfPeople,
  numberOfSlices,
  handleUpdatePeople,
  handleUpdateSlices,
  reset,
  totalPizzasNeeded
}) => {
  return (
    <>
      <Title appTitle="Pizza Calculator" />
      <Input
        handleChange={handleUpdatePeople}
        label="Number of Guests "
        value={numberOfPeople}
      />
      <Input
        handleChange={handleUpdateSlices}
        label="Slices per Person "
        value={numberOfSlices}
      />
      <Result
        numberOfPizzas={totalPizzasNeeded(numberOfPeople, numberOfSlices)}
      />
      <button onClick={() => reset()}>Reset</button>
    </>
  )
}

export default PizzaCalculator
