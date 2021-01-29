import React, { Component } from 'react'

import calculatePizzasNeeded from '../lib/calculate-pizzas-needed'

import PizzaCalculator from './PizzaCalculator'

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
}

const WithPizzaCalculations = WrappedComponent => {
  return class extends Component {
    static displayName = `WithPizzaCalculations(${
      WrappedComponent.displayName || WrappedComponent.name
    })`

    state = { ...initialState }

    updateNumberOfPeople = e => {
      const numberOfPeople = parseInt(e.target.value, 10)
      this.setState({ numberOfPeople })
    }
    updateSlicesPerPerson = e => {
      const slicesPerPerson = parseInt(e.target.value, 10)
      this.setState({ slicesPerPerson })
    }
    reset = e => this.setState({ ...initialState })

    render() {
      const { numberOfPeople, slicesPerPerson } = this.state
      const { updateNumberOfPeople, updateSlicesPerPerson, reset } = this
      return (
        <WrappedComponent
          numberOfPeople={numberOfPeople}
          numberOfSlices={slicesPerPerson}
          handleUpdatePeople={updateNumberOfPeople}
          handleUpdateSlices={updateSlicesPerPerson}
          reset={reset}
          totalPizzasNeeded={calculatePizzasNeeded}
        />
      )
    }
  }
}

const PizzaContainer = WithPizzaCalculations(PizzaCalculator)

export default class PizzaCalculatorApp extends Component {
  render() {
    return <PizzaContainer />
  }
}
