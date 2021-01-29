import React from "react"
import styled from "@emotion/styled"
import { Checkbox, Label } from "theme-ui"

const Container = styled.div`
  margin-top: 5px;
  display: flex;
`
const Item = styled.span`
  font-size: 14px;

  margin-left: 8px;
`
const RemoveButton = styled.span`
  margin-top: 2px;
  margin-left: 10px;
  font-size: 8px;
  color: red;
  cursor: pointer;
`

const ListItem = ({ title, removeItem, id, togglePacked, packed }) => {
  return (
    <Container>
      <Label htmlFor={id}>
        <Checkbox
          checked={packed}
          onChange={() => togglePacked(id)}
          value={packed}
          id={id}
          name={id}
        />
        <Item>{title}</Item>
      </Label>
      <RemoveButton onClick={() => removeItem(id)}>Remove</RemoveButton>
    </Container>
  )
}

export default ListItem
