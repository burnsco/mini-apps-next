import { Container } from "@chakra-ui/react"
import { FC } from "react"
import LuggageTrackerFilters from "./FilterGroup"
import LuggageTrackerHeader from "./Header"
import LuggageTrackerInput from "./Input"
import LuggageTrackerListView from "./List"

const LuggageTracker: FC<{}> = () => (
  <Container>
    <LuggageTrackerHeader />
    <LuggageTrackerInput />
    <LuggageTrackerFilters />
    <LuggageTrackerListView />
  </Container>
)

export default LuggageTracker
