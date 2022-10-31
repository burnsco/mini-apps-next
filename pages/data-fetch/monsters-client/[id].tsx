import { GetStaticPaths, GetStaticProps } from 'next'
import { fetcher } from '../fetcher'
import SingleUserPage from '../singleUser'

type User = {
  id: number
  name: string
  email: string
  website: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_page=1')
  if (!res) {
    return null
  }

  const userList = await res.json()

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
  const user = await fetcher(
    `https://jsonplaceholder.typicode.com/users/${params?.id}`
  )

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
