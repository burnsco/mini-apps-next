import dynamic from 'next/dynamic'

const CoinFlipper = dynamic(() => import('@apps/CoinFlipper'))

const CoinFlipperPage = () => <CoinFlipper />

export default CoinFlipperPage
