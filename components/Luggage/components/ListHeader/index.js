import React from "react"
import styled from "@emotion/styled"

const CustomHeader = styled.h1`
  font-size: 1.5em;
`

const ListHeader = ({ title, items }) => (
  <CustomHeader>
    {title} ({items})
  </CustomHeader>
)

export default ListHeader
