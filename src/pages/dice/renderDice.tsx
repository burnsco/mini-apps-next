import { Icon } from "@chakra-ui/react"
import { FC } from "react"
import {
  GiPerspectiveDiceSixFacesFive,
  GiPerspectiveDiceSixFacesFour,
  GiPerspectiveDiceSixFacesOne,
  GiPerspectiveDiceSixFacesSix,
  GiPerspectiveDiceSixFacesThree,
  GiPerspectiveDiceSixFacesTwo
} from "react-icons/gi"

const RenderDie: FC<{ dieOne?: number; dieTwo?: number }> = ({
  dieOne,
  dieTwo
}) => (
  <>
    {dieOne === 1 || dieTwo === 1 ? (
      <Icon boxSize="3em" as={GiPerspectiveDiceSixFacesOne} />
    ) : null}
    {dieOne === 2 || dieTwo === 2 ? (
      <Icon boxSize="3em" as={GiPerspectiveDiceSixFacesTwo} />
    ) : null}
    {dieOne === 3 || dieTwo === 3 ? (
      <Icon boxSize="3em" as={GiPerspectiveDiceSixFacesThree} />
    ) : null}
    {dieOne === 4 || dieTwo === 4 ? (
      <Icon boxSize="3em" as={GiPerspectiveDiceSixFacesFour} />
    ) : null}
    {dieOne === 5 || dieTwo === 5 ? (
      <Icon boxSize="3em" as={GiPerspectiveDiceSixFacesFive} />
    ) : null}
    {dieOne === 6 || dieTwo === 6 ? (
      <Icon boxSize="3em" as={GiPerspectiveDiceSixFacesSix} />
    ) : null}
  </>
)
export default RenderDie
