/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import MediaQuery from 'react-responsive'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Flex, Box, Grid} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive } from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
  <div>
    <Container w={[720]} >
      <Heading level={[1]}>Heading 1</Heading>
      <Heading level={[2]}>Heading 2</Heading>
      <Heading level={[3]}>Heading 3</Heading>
      <Heading level={[4]}>Heading 4</Heading>
      <Heading level={[5]}>Heading 5</Heading>
      <Heading level={[6]}>Heading 6</Heading>
    <Blockquote>
      Donec viverra erat sed lacus blandit faucibus. Nulla ipsum libero, dictum a cursus non, sollicitudin ac metus. Cras id mi vitae ante maximus dapibus eget quis urna. Proin nec tortor sed arcu posuere consectetur vel vitae lectus. Pellentesque fringilla fringilla sapien ac molestie. Praesent et diam viverra, bibendum lacus sit amet, tempor nunc. 
      <cite>KamesCG</cite>
    </Blockquote>

    <Button>Join Now</Button><br/><br/>
    <Button gradient='cherry' >Register Account</Button><br/><br/>
    <Button gradient='greenLush' f={[3]} bs={[2]} >Control Univsere</Button><br/><br/>
    </Container>    
  </div>
)


