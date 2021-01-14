import { Heading } from "@chakra-ui/react"
import { Layout } from "@ui/index"

const IndexPage = () => (
  <Layout>
    <Heading>
      Here lies a place to store the apps I first made in my coding journey.{" "}
      <span role="img" aria-label="COOL">
        🤸
      </span>
    </Heading>
    <Heading mt={4}>
      Also contains experiments, practice apps, goofy styling and other fun
      things.
      <span role="img" aria-label="FUN">
        🤹
      </span>
    </Heading>
  </Layout>
)

export default IndexPage
