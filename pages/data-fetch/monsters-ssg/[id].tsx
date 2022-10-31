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
  const userList = await getData(
    'https://jsonplaceholder.typicode.com/users?_page=1'
  )

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
