import { getData } from '@pages/data-fetch/fetch'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

const Monsters = dynamic(() => import('@apps/Monsters/monsters'))

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

  if (!data) return null

  return {
    props: {
      data
    }
  }
}

const MonstersRolodexPage = (props: any) => <Monsters {...props} />

export default MonstersRolodexPage
