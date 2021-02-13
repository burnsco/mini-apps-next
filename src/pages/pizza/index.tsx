import dynamic from "next/dynamic"

const PizzaCalculator = dynamic(() => import("@apps/PizzaCalculator"))

const LuggagePackTrackPage = () => <PizzaCalculator />

export default LuggagePackTrackPage
