import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const IndexPage = () => (
  <>
    <Heading>
      Here lies a place to store the apps I first made in my coding journey.{' '}
      <span role='img' aria-label='COOL'>
        🤸
      </span>
    </Heading>
    <MotionBox
      boxSize='40px'
      bg='red.300'
      drag='x'
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%']
      }}
    />
    <Heading mt={4}>
      Also contains experiments, practice apps, goofy styling and other fun
      things.
      <span role='img' aria-label='FUN'>
        🤹
      </span>
    </Heading>
  </>
)

export default IndexPage
