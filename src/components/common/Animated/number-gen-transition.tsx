import { Box } from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'

const NumberItemContainer = motion(Box)

export const NumberAnimationContainer = (props: HTMLMotionProps<'div'>) => (
  <NumberItemContainer
    initial={{ y: -16, opacity: 0 }}
    animate={{
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
    }}
    {...props}
  />
)

const NumberItem = motion(Box)

export const NumberAnimationItem = (props: HTMLMotionProps<'div'>) => (
  <NumberItem
    initial={{ y: 0, opacity: 0 }}
    animate={{
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    }}
    {...props}
  />
)
