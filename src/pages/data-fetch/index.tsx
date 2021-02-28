import { GetStaticProps } from 'next'
import Monsters from '../../components/apps/Monsters/monsters'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

  const data = await response.json()

  return {
    props: {
      data
    }
  }
}

const MonstersRolodexPage = (props: any) => <Monsters {...props} />

export default MonstersRolodexPage
