import {
  Button,
  ButtonGroup,
  Center,
  Container,
  Grid,
  GridItem,
  GridItemProps,
  Heading
} from '@chakra-ui/react'
import { useState } from 'react'

interface CenteredGridItemProps extends GridItemProps {
  value: any
  index: number
  label: string | number
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const initialGameBoard = Array(9).fill(null)

export default function TicTacToe() {
  const [xTurn, setXTurn] = useState(true)
  const [gameboard, setGameboard] = useState(initialGameBoard)
  const [history, setHistory] = useState([])
  const winner = calculateWinner(gameboard)

  const CenteredGridItem = (props: CenteredGridItemProps) => (
    <GridItem
      w='120px'
      h='120px'
      border='2px solid orange'
      index={props.index}
      {...props}
      onClick={() => {
        const game = [...gameboard]
        if (xTurn && game[props.index] === null && !winner) {
          game[props.index] = 'X'
          setHistory(history => [...history, [...game]])
          setXTurn(false)
        }
        if (!xTurn && game[props.index] === null && !winner) {
          game[props.index] = 'O'
          setHistory(history => [...history, [...game]])
          setXTurn(true)
        }

        setGameboard(game)
      }}
    >
      {props.label !== null ? (
        <Center h='100%' fontSize='4xl' fontWeight='extrabold'>
          {props.label}
        </Center>
      ) : null}
    </GridItem>
  )

  return (
    <Container>
      <Button
        variant='solid'
        colorScheme='facebook'
        onClick={() => {
          setHistory([])
          setGameboard(initialGameBoard)
        }}
      >
        Reset
      </Button>
      <Container m='3'>
        <ButtonGroup>
          {history.map((_, index) => (
            <Button
              onClick={() => {
                setGameboard(history[index])
              }}
              key={`history - ${index}`}
            >
              {index}
            </Button>
          ))}
        </ButtonGroup>
      </Container>

      <Grid
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(3, 1fr)'
        gap={1}
      >
        {gameboard.map((cell, index) => (
          <CenteredGridItem
            value={cell}
            index={index}
            label={cell}
            key={`${index} - ${cell}`}
          />
        ))}
      </Grid>
      <Container>
        <Heading>{history.length == 9 && 'End of Game'}</Heading>
        <Heading>
          {history.length == 9 && !winner ? 'Nobody Wins' : null}
        </Heading>
        <Heading>{winner ? `${winner} wins` : null}</Heading>
      </Container>
    </Container>
  )
}
