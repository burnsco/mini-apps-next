import { GetServerSideProps } from 'next'
import Monsters from './monsters'

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

  const users: User[] = await response.json()

  if (!users) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      users
    }
  }
}

export default function MonstersRolodexPage(users: User[]) {
  return <Monsters {...users} />
}
