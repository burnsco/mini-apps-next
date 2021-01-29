import React from "react"
import { Badge } from "theme-ui"

export const Ball = ({ value }) => {
  return (
    <div>
      <Badge
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: 2,
          height: 50,
          width: 50,
          borderRadius: "circle",
        }}
      >
        <strong>{value}</strong>
      </Badge>
    </div>
  )
}
