import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { fetcher } from '../fetcher'

const Monsters = dynamic(() => import('@apps/Monsters/monsters'))

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetcher(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      data
    }
  }
}

const MonstersRolodexPage = (props: any) => <Monsters {...props} />

export default MonstersRolodexPage
