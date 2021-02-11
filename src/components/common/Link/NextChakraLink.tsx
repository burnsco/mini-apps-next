import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react"
import type { LinkProps as NextLinkProps } from "next/dist/client/link"
import NextLink from "next/link"
import type { PropsWithChildren } from "react"

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, "as">
>

const NextChakraLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: NextChakraLinkProps) => (
  <NextLink
    passHref
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={prefetch}
  >
    <ChakraLink {...chakraProps}>{children}</ChakraLink>
  </NextLink>
)

export default NextChakraLink
