import React from "react"
import LuggageTracker from "./LuggageTracker"
import { v4 as uuid } from "uuid"
import { useState } from "react"
import { INITIAL_STATE } from "../data"

function LuggageTrackerApp2() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState(INITIAL_STATE)

  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = () => {
    if (input !== "") {
      let itemz = [
        ...items,
        {
          id: uuid(),
          title: input,
          packed: false,
        },
      ]
      setInput("")
      setItems(itemz)
    }
  }
  const removeItem = id => {
    let itemz = [...items.filter(item => item.id !== id)]
    setItems(itemz)
  }
  const togglePacked = id => {
    let itemz = [...items]
    let index = items.findIndex(item => item.id === id)
    items[index].packed = !items[index].packed
    setItems(itemz)
  }
  const toggleAll = () => {
    let itemz = [...items]
    items.forEach(item => (item.packed = false))
    setItems(itemz)
  }

  let unpackedItems = items.filter(item => !item.packed)
  let packedItems = items.filter(item => item.packed)

  return (
    <LuggageTracker
      input={input}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      packedItems={packedItems}
      unpackedItems={unpackedItems}
      removeItem={removeItem}
      togglePacked={togglePacked}
      toggleAll={toggleAll}
    />
  )
}

export default LuggageTrackerApp2
