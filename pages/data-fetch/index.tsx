import { GetStaticProps } from "next"
import Monsters from "./monsters"

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_page=1"
  )

  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default function MonstersRolodexPage(users: User[]) {
  return <Monsters {...users} />
}
