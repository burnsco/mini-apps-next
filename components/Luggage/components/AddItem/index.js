import React from "react"
import { Input, Button, Flex } from "theme-ui"

const AddItem = ({ handleChange, handleSubmit, input }) => (
  <Flex>
    <Input
      value={input}
      onChange={e => handleChange(e)}
      sx={{ width: "70%" }}
    />
    <Button sx={{ width: "30%" }} primary onClick={() => handleSubmit()}>
      Add Item
    </Button>
  </Flex>
)

export default AddItem
