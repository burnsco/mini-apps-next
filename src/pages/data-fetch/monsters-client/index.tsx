import dynamic from 'next/dynamic'

const MonstersClient = dynamic(() => import('@apps/Monsters/ClientFetch'))

const MonstersClientPage = () => <MonstersClient />

export default MonstersClientPage
