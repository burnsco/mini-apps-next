import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { FC, useState } from "react"
import { v4 } from "uuid"
import { itemsVar } from "./cache"

const LuggageTrackerInput: FC<{}> = () => {
  const [input, setInput] = useState("")

  const handleClick = (e: any) => {
    e.preventDefault()
    itemsVar([
      ...itemsVar(),
      {
        id: v4(),
        text: input,
        completed: false
      }
    ])
    setInput("")
  }

  return (
    <form onSubmit={handleClick}>
      <InputGroup>
        <Input
          pr="3.2rem"
          value={input}
          placeholder="Item to pack..."
          onChange={e => setInput(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button type="submit" h="1.75rem" size="sm" onClick={handleClick}>
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default LuggageTrackerInput
