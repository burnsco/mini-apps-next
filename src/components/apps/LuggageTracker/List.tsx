import { useQuery } from "@apollo/client"
import {
  Checkbox,
  HStack,
  List,
  ListItem,
  Skeleton,
  Text
} from "@chakra-ui/react"
import { FC } from "react"
import { GET_ALL_ITEMS } from "./queries/getAllItems"

const LuggageTrackerListView: FC<{}> = () => {
  const {
    data: { items },
    loading: loadingItems
  } = useQuery(GET_ALL_ITEMS)

  return (
    <Skeleton isLoaded={!loadingItems}>
      <List mt={4}>
        {items.map((item: LuggageItem) => (
          <ListItem key={`List-Item-${item.text}`}>
            <HStack>
              <Text>{item.text}</Text>
              <Checkbox size="md" isChecked={item.completed} />
            </HStack>
          </ListItem>
        ))}
      </List>
    </Skeleton>
  )
}

export default LuggageTrackerListView
