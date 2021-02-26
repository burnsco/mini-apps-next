import dynamic from 'next/dynamic'

const LuggageTracker = dynamic(
  () => import('@apps/LuggageTracker/containers/apollo')
)

const LuggagePackTrackPage = () => <LuggageTracker />

export default LuggagePackTrackPage
