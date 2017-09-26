/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Heading, Link, Paragraph, Span } from 'atomic'
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const BlockTop = ({ ...props }) => (
<Flex align={"stretch"} direction={['column', 'row']} bg={['blueDark']} color={['white']} bs={[0]} pos='relative' display={['none', 'none', 'flex']}>
  <Flex align="center" w={[0.2]} pl={[15]} py={[7.5]}>
    <Link to="/"><Heading color='white' level={5} margin={'0'} fontSize={[1]} fontWeight={'100'} >Alerts</Heading></Link>
    <Link to="/"><Heading color='white' level={5} margin={'0'} fontSize={[1]} fontWeight={'100'} ml={[10]}>Updates</Heading></Link>
  </Flex>
  
  <Flex align="center" justify={['flex-end']} pr={[15]} w={[1, 0.2, 0.15]} textAlign="right">

  </Flex>
  <Flex align="center" justify='flex-end' w={[1, 0.1, 0.15]} pr={[10]} >

  </Flex>
</Flex>
)

/* ---------------------------- Export Package ------------------------------ */
export default BlockTop