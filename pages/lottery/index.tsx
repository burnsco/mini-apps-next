import dynamic from 'next/dynamic'

const LotteryGenerator = dynamic(() => import('@apps/LotteryGenerator'))

const LuggagePackTrackPage = () => <LotteryGenerator />

export default LuggagePackTrackPage
