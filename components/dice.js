import React, { useState } from 'react'
import Layout from '../components/Layout'
import '../components/Apps/Dice/Dice.css'
import RenderIcon from '../components/Apps/Dice/RenderDie'

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(6 - 1) + 1)
}

export default function Dice() {
  const [dieOne, setDieOne] = useState('1')
  const [dieTwo, setDieTwo] = useState('4')
  const [rolling, setRolling] = useState(false)

  const rollDice = () => {
    setRolling(true)

    setDieOne(getRandomInt().toString())

    setDieTwo(getRandomInt().toString())

    setTimeout(() => {
      setRolling(false)
    }, 1000)
  }

  return (
    <Layout>
      <div className={rolling ? 'dice shakeDice' : 'dice'}>
        <RenderIcon height="6em" width="6em" value={dieOne} />
        <RenderIcon height="6em" width="6em" value={dieTwo} />
      </div>
      <button
        type="button"
        disabled={rolling}
        style={{ fontSize: 20, width: 200, height: 70, marginTop: 50 }}
        onClick={() => rollDice()}
      >
        <p>{rolling ? 'Rolling...' : 'Roll Dice'}</p>
      </button>
    </Layout>
  )
}
