/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box, Heading, Image, Span, Link } from 'atomic'
import { DrawerOpen} from 'containers'
/* ------------------------------- Component -------------------------------- */
const BlockBranding = ({ ...props }) => {
  return (
    <Flex direction={['row']} align={"stretch"} justify="center" bg={['charcoal']} gradientDir='45deg' color={['green']} bs={[0]} textAlign={[null,null, 'center']} >

      {/*Accunt Information*/}
      <Flex align="center" justify="left" pl={[15]} direction={['row']} display={['none', 'none', 'Flex']} w={[1, 1, 0.25]}>
        <Link to="/account" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Balance: <Span fontWeight='300' color='red'>Unknown</Span> </Heading></Link>
      </Flex>
      
      {/*System Information*/}
      <Flex align="center" w={[1, 1, 0.45]} justify="flex-start" display={['none', 'none', 'flex']} py={[15]} >
        <Link to="/infrastructure/security" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Security: <Span fontWeight='300' color='green'>Unknown</Span></Heading></Link>
        <Link to="/infrastructure/market" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Market Status: <Span fontWeight='300' color='green' >Unknown</Span></Heading></Link>
      </Flex>
      <Flex align="center" justify={[ 'center', 'center', 'flex-end']} pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.23]}>
        
      </Flex>
      {/*System Information*/}
      <Flex align="center" justify='center' gradient={['blue']} py={[10]} color='white' w={[1, 1, 0.07]} textAlign="center">
        <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
      </Flex>
    </Flex>
)
}

/* ---------------------------- Export Package ------------------------------ */
export default BlockBranding