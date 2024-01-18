import { gql, useQuery } from '@apollo/client'
import {
  Button,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  List,
  ListItem
} from '@chakra-ui/react'
import { itemsVar } from './cache'

function ListItemEditControls(item: LuggageItem) {
  return (
    <Editable
      defaultValue={item.text}
      submitOnBlur
      onSubmit={props => {
        itemsVar([
          ...itemsVar().map(i =>
            i.id !== item.id ? { ...i } : { ...i, text: props }
          )
        ])
      }}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

function ListItemTogglePacked(item: LuggageItem) {
  return (
    <Checkbox
      size='md'
      isChecked={item.completed}
      onChange={() => {
        itemsVar([
          ...itemsVar().map(i =>
            i.id !== item.id ? { ...i } : { ...i, completed: !i.completed }
          )
        ])
      }}
    />
  )
}

export default function LuggageTrackerList() {
  const {
    data: { items }
  } = useQuery(gql`
    query GetAllItemsQuery {
      items @client
    }
  `)
  return (
    <>
      <List mt={4}>
        {items.map((item: any) => (
          <ListItem key={`list item-${item.id}-${item.completed}`}>
            <HStack>
              <ListItemTogglePacked {...item} />
              <ListItemEditControls {...item} />
            </HStack>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() => {
          itemsVar([...itemsVar().filter(item => !item.completed)])
        }}
        size='xs'
        colorScheme='telegram'
      >
        Clear Completed
      </Button>
    </>
  )
}
