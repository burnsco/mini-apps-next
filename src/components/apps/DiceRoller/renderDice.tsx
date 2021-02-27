import { Icon } from '@chakra-ui/react'
import { FC } from 'react'
import {
  GiPerspectiveDiceSixFacesFive,
  GiPerspectiveDiceSixFacesFour,
  GiPerspectiveDiceSixFacesOne,
  GiPerspectiveDiceSixFacesSix,
  GiPerspectiveDiceSixFacesThree,
  GiPerspectiveDiceSixFacesTwo
} from 'react-icons/gi'

const RenderDie: FC<{
  dieOne?: number
  dieTwo?: number
  dieThree?: number
  dieFour?: number
  dieFive?: number
  dieSix?: number
}> = ({ dieOne, dieTwo, dieThree, dieFour, dieFive, dieSix }) => (
  <>
    {dieOne === 1 ||
    dieTwo === 1 ||
    dieThree === 1 ||
    dieFour === 1 ||
    dieFive === 1 ||
    dieSix === 1 ? (
      <Icon boxSize='3em' as={GiPerspectiveDiceSixFacesOne} />
    ) : null}
    {dieOne === 2 ||
    dieTwo === 2 ||
    dieThree === 2 ||
    dieFour === 2 ||
    dieFive === 2 ||
    dieSix === 2 ? (
      <Icon boxSize='3em' as={GiPerspectiveDiceSixFacesTwo} />
    ) : null}
    {dieOne === 3 ||
    dieTwo === 3 ||
    dieThree === 3 ||
    dieFour === 3 ||
    dieFive === 3 ||
    dieSix === 3 ? (
      <Icon boxSize='3em' as={GiPerspectiveDiceSixFacesThree} />
    ) : null}
    {dieOne === 4 ||
    dieTwo === 4 ||
    dieThree === 4 ||
    dieFour === 4 ||
    dieFive === 4 ||
    dieSix === 4 ? (
      <Icon boxSize='3em' as={GiPerspectiveDiceSixFacesFour} />
    ) : null}
    {dieOne === 5 ||
    dieTwo === 5 ||
    dieThree === 5 ||
    dieFour === 5 ||
    dieFive === 5 ||
    dieSix === 5 ? (
      <Icon boxSize='3em' as={GiPerspectiveDiceSixFacesFive} />
    ) : null}
    {dieOne === 6 ||
    dieTwo === 6 ||
    dieThree === 6 ||
    dieFour === 6 ||
    dieFive === 6 ||
    dieSix === 6 ? (
      <Icon boxSize='3em' as={GiPerspectiveDiceSixFacesSix} />
    ) : null}
  </>
)
export default RenderDie
