import React from "react"
import { Label } from "theme-ui"

const Input = ({ label, value, handleChange }) => {
  return (
    <>
      <Label htmlFor={label}>
        {label}
        <input onChange={e => handleChange(e)} type="number" value={value} />
      </Label>
    </>
  )
}

export default Input
