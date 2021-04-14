import { GetStaticPaths, GetStaticProps } from 'next'
import SingleUserPage from '../singleUser'

type User = {
  id: number
  name: string
  email: string
  website: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )
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
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.id}`
  )

  if (!response) {
    return {
      redirect: {
        destination: '/data-fetch',
        permanent: false
      }
    }
  }

  const user = await response.json()

  return {
    props: user
  }
}

export default function MonsterPage(user: User) {
  return <SingleUserPage {...user} />
}
