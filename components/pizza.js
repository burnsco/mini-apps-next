/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import PizzaCalculatorApp from '../components/Apps/Pizza/container/App'

export default function Pizza() {
  return (
    <Layout>
      <PizzaCalculatorApp />
    </Layout>
  )
}
