/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Flex, Box} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
  <Section {...props} color='white' pos='relative' >
    <BackgroundGradient gradient={['ibize']} z={5} o={1} o={0.4} bs={['insetBottomLight']}/>
    <BackgroundImage src={assets.images.marin} />
    <Container>
      <Flex align='center' direction={['column']} justify={['center']} mh={['100vh']} w={[1]} >
        <Box w={1} color="white" ta='center'>
          <Heading level={[3]} f={[5]} fw='bold' textAlign='center' ts={['darkPurple']}>Harvest</Heading>
          <HorizontalRule bi='colorBaseReverse' bs={1} mt={[10, 20]} gradientDir='-170deg' w={[0.33333]} />
          <Heading level={[3]} f={[3]} ts={['darkPurple']}>Open Source Javascript/WebAssembly Monero Mining</Heading>
        </Box>
      </Flex>
    </Container>
  </Section>
)