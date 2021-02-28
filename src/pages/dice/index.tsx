import dynamic from 'next/dynamic'

const DiceRoll = dynamic(() => import('@apps/DiceRoller'))

const DiceRollPage = () => <DiceRoll />

export default DiceRollPage
