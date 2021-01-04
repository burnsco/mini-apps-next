import { Layout } from "@ui/index"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@ui/Footer"))

const IndexPage = () => (
  <Layout>
    <footer>
      <Footer />
    </footer>
  </Layout>
)

export default IndexPage
