import {
  Center,
  Container,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  Input
} from '@chakra-ui/react'
import * as math from 'mathjs'
import { useState } from 'react'

export default function IndexPage() {
  const [currentValue, setCurrentValue] = useState('0')
  const [total, setTotal] = useState([])

  function evaluate() {
    const expression = total.join('')
    const result = math.evaluate(expression)
    setCurrentValue(result)
    setTotal([result])
  }

  function clear() {
    setCurrentValue('0')
    setTotal([])
  }

  function handleClick(value: string | number) {
    if (value === 'equals') {
      return evaluate()
    }
    if (value === 'clear') {
      return clear()
    }

    setTotal([...total, value])
  }

  interface CenteredGridItemProps extends GridItemProps {
    value: string | number
    label: string | number
  }

  const CenteredGridItem = (props: CenteredGridItemProps) => (
    <GridItem
      {...props}
      border='1px solid grey'
      onClick={() => handleClick(props.value)}
    >
      <Center h='100%'>{props.label}</Center>
    </GridItem>
  )

  return (
    <Container height='100vh'>
      <Grid
        border='.5px solid grey'
        mt='5'
        templateRows='repeat(6,1fr)'
        templateColumns='repeat(4, 1fr)'
      >
        <GridItem colSpan={4} rowSpan={1}>
          <Input
            value={currentValue}
            onChange={e => {
              setTotal([...total, e.target.value])
            }}
          />
        </GridItem>
        <CenteredGridItem label='C' value='clear' colSpan={2}>
          C
        </CenteredGridItem>
        <CenteredGridItem label='%' value='%'>
          %
        </CenteredGridItem>
        <CenteredGridItem label='/' value='/'>
          /
        </CenteredGridItem>
        {[7, 8, 9].map(item => (
          <CenteredGridItem key={item} label={item} value={item}>
            1
          </CenteredGridItem>
        ))}
        <CenteredGridItem label='x' value='*'>
          x
        </CenteredGridItem>
        {[4, 5, 6].map(item => (
          <CenteredGridItem key={item} label={item} value={item}>
            1
          </CenteredGridItem>
        ))}

        <CenteredGridItem label='-' value='-'>
          -
        </CenteredGridItem>
        {[1, 2, 3].map(item => (
          <CenteredGridItem key={item} label={item} value={item}>
            1
          </CenteredGridItem>
        ))}

        <CenteredGridItem label='+' value='+'>
          +
        </CenteredGridItem>
        <CenteredGridItem label='0' value='0' colSpan={2}>
          0
        </CenteredGridItem>
        <CenteredGridItem label='.' value='.'>
          .
        </CenteredGridItem>
        <CenteredGridItem label='=' value='equals'>
          =
        </CenteredGridItem>
      </Grid>
      <Heading>Total: {currentValue}</Heading>
      <Heading>Current: {total}</Heading>
    </Container>
  )
}
