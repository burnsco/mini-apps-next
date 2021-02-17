import dynamic from "next/dynamic"

const LuggageTracker = dynamic(() => import("@apps/LuggageTracker/container"))

const LuggagePackTrackPage = () => <LuggageTracker />

export default LuggagePackTrackPage
