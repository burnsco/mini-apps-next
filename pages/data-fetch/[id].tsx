import { GetStaticPaths, GetStaticProps } from 'next'
import SingleUserPage from './singleUser'

type User = {
  id: number
  name: string
  email: string
  website: string
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_page=1')
  return res.json()
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getUsers()

  if (!users) {
    return null
  }

  return {
    paths: users.map((user: any) => ({
      params: {
        id: `${user.id}`
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  async function getUser() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params?.id}`
    )
    return res
  }

  const user = await getUser()

  if (!user) {
    return {
      redirect: {
        destination: '/data-fetch',
        permanent: false
      }
    }
  }

  return {
    props: user
  }
}

export default function MonsterPage(user: User) {
  return <SingleUserPage {...user} />
}
