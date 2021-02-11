import { Alert } from "@chakra-ui/alert"
import { Spinner } from "@chakra-ui/spinner"
import useSWR from "swr"
import { fetcher } from "utils/fetcher"
import Monsters from "./monsters"

export default function MonstersRolodexPage() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users?_page=1",
    fetcher
  )

  if (error) return <Alert>{error}</Alert>
  if (!data) return <Spinner />

  const { users } = data

  return <Monsters {...users} />
}
