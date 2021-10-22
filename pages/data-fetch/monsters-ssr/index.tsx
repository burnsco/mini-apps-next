import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

const Monsters = dynamic(() => import('@apps/Monsters/monsters'))

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

  const data = await response.json()

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
