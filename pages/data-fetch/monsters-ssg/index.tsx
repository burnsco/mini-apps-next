import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { fetcher } from '../fetcher'

const Monsters = dynamic(() => import('@apps/Monsters/monsters'))

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetcher(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

  return {
    props: {
      data
    }
  }
}

const MonstersRolodexPage = (props: any) => <Monsters {...props} />

export default MonstersRolodexPage
