import dynamic from 'next/dynamic'

const LuggageTracker = dynamic(() => import('@apps/LuggageTracker'))

const LuggagePackTrackPage = () => <LuggageTracker />

export default LuggagePackTrackPage
