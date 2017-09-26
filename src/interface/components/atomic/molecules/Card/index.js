import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'atomic'
import { responsiveStyle, util } from 'styled-system'

const bw = ({ bc, borderColor })=> `${bc || borderColor ? '2px' : 0}` 

const CardWrapper = styled(Flex)`
  border-bottom-style: solid;
  border-bottom-width: ${bw};
  position: relative;
`
const Card = props => {
  return (
  <CardWrapper {...props} >
    { props.children }
  </CardWrapper>
)}

CardWrapper.defaultProps = {
  bs: 0,
  direction: 'column'
}

export default Card
