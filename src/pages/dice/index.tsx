import dynamic from "next/dynamic"

const DiceRollData = dynamic(() => import("./dice"))

const DiceRollView = () => <DiceRollData />

export default DiceRollView
