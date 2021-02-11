import { GetStaticProps } from "next"
import MonstersView from "./monsters"

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_page=1"
  )

  const users: User[] = await response.json()

  return {
    props: {
      users
    }
  }
}

export default function MonstersData(users: User[]) {
  return <MonstersView {...users} />
}
