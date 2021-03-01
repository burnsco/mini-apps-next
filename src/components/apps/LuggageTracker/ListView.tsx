import {
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

export default function LuggageTrackerList(props: any) {
  return (
    <List mt={4}>
      {props.items.map((item: any) => (
        <ListItem key={`list item-${item.id}-${item.completed}`}>
          <HStack>
            <ListItemTogglePacked {...item} />
            <ListItemEditControls {...item} />
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
