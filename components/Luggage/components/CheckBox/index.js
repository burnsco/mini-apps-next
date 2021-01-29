import React from "react"
import { Checkbox, Label } from "theme-ui"

const Checked = ({ packed, togglePacked, value, id }) => (
  <>
    <Checkbox
      onChange={() => togglePacked(id)}
      checked={packed}
      name="packed"
      value={packed}
    />
  </>
)

export default Checkbox
