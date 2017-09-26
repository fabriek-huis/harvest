/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react';
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Absolute, Box, Flex, Drawer } from 'particles'
import { Heading, Image, Paragraph, Link, Container, Section, SVG} from 'atomic'
import { DrawerClose } from 'containers'
import { DrawerLink } from 'fusion'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'

/* --------------------------- Styled Components ---------------------------- */
import { LinkIcon, AsideDrawerMenu, AsideMenuMain, TemplateNotifications } from 'foundry'

/* ------------------------ Initialize Dependencies ------------------------- */
const FlexMove = styled(Flex)`
  transition: all 0.275s ease;
  position: relative;
  &:hover {
    transform: translate(10px, 0)
  }
`
const CT = styled(Absolute)`
  overflow:hidden;
`

/* ------------------------------- Component -------------------------------- */
const DrawerFactory = (props) => (
<Absolute top={props.drawer} bottom={props.drawer} left={props.drawer} right={props.drawer} z={1000} >
  <Drawer
      bs={[2]}
      open={props.drawer}
      position='left'
      p={3}
      color='white'
      gradient='blue'
      overflow='hidden'
      z={1000}
    >
    <Absolute top right mt={[10]} mr={[10]} gradient='cherry' p={[5]}  ><DrawerClose><Heading f={[2]} level={[6]}><a>X</a></Heading></DrawerClose></Absolute>
      <PerfectScrollbar >
        <div height='1500px'>
          <div direction='column' w={[1]} >
          <Heading f={[3]} level={[3]}>Dashboard</Heading>
          <AsideDrawerMenu/>
          </div>
        </div>
      </PerfectScrollbar >
	</Drawer>
  {!props.drawer ? null : <Absolute top bottom left right onClick={props.drawerClose} z={50} /> }
  </Absolute>
)


/* ---------------------------- Export Package ------------------------------ */
export default DrawerFactory
