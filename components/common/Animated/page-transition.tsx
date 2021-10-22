import { Box } from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'

const PageMotionBox = motion(Box)

const PageTransition = (props: HTMLMotionProps<'div'>) => (
  <PageMotionBox
    initial={{ y: -16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
)

export default PageTransition
