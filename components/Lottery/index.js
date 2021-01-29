import React from "react"
import styled from "@emotion/styled"
import { Ball } from "./Ball"

export const Container = styled.div`
  border: 1px solid grey;
  border-radius: 2px;
  margin: 0 auto;
`
const BallContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`
const GenerateButton = styled.button`
  background: blueviolet;
  width: 100%;
  height: 50px;
  color: white;
`

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1)
}

function generateBalls(maxBalls, maxNum) {
  let ballsArray = []
  for (let i = 0; i < maxBalls; i++) {
    ballsArray.push(<Ball value={getRandomNumber(maxNum)} key={i} />)
  }
  return ballsArray
}

function Lotto({ numBalls, maxNum, generate }) {
  return (
    <Container>
      <BallContainer>{generateBalls(numBalls, maxNum)}</BallContainer>
      <GenerateButton
        onClick={() => {
          generate()
        }}
      >
        Generate
      </GenerateButton>
    </Container>
  )
}

export default Lotto
