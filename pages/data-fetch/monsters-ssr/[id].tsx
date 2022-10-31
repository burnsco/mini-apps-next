import { getData } from '@pages/data-fetch/fetch'
import { GetStaticPaths, GetStaticProps } from 'next'
import SingleUserPage from '../singleUser'

type User = {
  id: number
  name: string
  email: string
  website: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getData(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )
  if (!response) {
    return null
  }

  const userList = await response.json()

  return {
    paths: userList.map((user: any) => ({
      params: {
        id: `${user.id}`
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = await getData(
    `https://jsonplaceholder.typicode.com/users/${params?.id}`
  )
  return {
    props: user
  }
}

export default function MonsterPage(user: User) {
  return <SingleUserPage {...user} />
}
