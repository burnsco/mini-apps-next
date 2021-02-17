import { ReactiveVar } from "@apollo/client"

export default function addItem(itemsVar: ReactiveVar<LuggageItem>) {
  const items = itemsVar()
  return items
}
