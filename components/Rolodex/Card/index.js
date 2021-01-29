import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`

export const Card = ({ user }) => (
  <Container>
    <img
      alt="monster"
      src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
    ></img>
    <h2>{user.name}</h2>
    <h3>{user.email}</h3>
  </Container>
)
