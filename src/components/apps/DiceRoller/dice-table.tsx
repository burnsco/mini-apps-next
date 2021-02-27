import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'

const DiceTable: FC<{ currentGameData: CurrentGame[] }> = ({
  currentGameData: data
}) => (
  <Table variant='simple' size='sm'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Game #</Th>
        <Th isNumeric>Score</Th>
        <Th isNumeric>Dice Roll</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map(c => (
        <Tr key={`game-${c.number}`}>
          <Td>{c.number}</Td>
          <Td isNumeric> {c.roll[0] + c.roll[1]}</Td>
          <Td isNumeric>
            {c.roll[0]}-{c.roll[1]}
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

export default DiceTable
