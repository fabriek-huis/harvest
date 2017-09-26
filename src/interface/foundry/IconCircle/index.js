/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex,Paragraph, SVG} from 'atomic'
/* ------------------------------- Component -------------------------------- */
const IconCircle = props => (
<Flex {...props}>
  <Flex align='center' justify='center' bs={[1]} bg='whiteOpaque' br={0.5}  w={60} h={60} p={12} >
    <SVG svg={props.svg} w={[40]} h={[40]} {...props.svgStyled} />
  </Flex>
  <Paragraph f={[0]} color='blueLight' mt={[10]} >{props.title}</Paragraph>
</Flex>
)

IconCircle.defaultProps = {
  align: 'center',
  direction: 'column',
  justify: 'center'
}

export default IconCircle