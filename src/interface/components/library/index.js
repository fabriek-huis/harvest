import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box, Container, Image, Heading, SVG, Paragraph } from 'atomic'
import { IconCircle } from 'foundry'
import MacbookDisplay from 'components/sentient/MacbookDisplay'
/* ---------------------------- Module Package ------------------------------ */

const LIBRARY_CATALOG_ADVANCED = {
  form: {

  },
  screenshot: {
    singlePage: <Image src={assets.screenshots.singlePage}/>,
    multiplePages: <Image src={assets.screenshots.multiplePages}/>,
    application: <Image src={assets.screenshots.application}/>,
  },
  service: {
    designFrontend: (
      <div>
        <Container w={[1,1, 0.6]} py={[25]}>
          <Flex align={['center']} justify={['space-evenly']} pt={[10,20]} gradient='blue' p={[10]} br={[4]} b={['1px solid']} bc='white' bs={[3]} my={[10,20]} >
            <IconCircle svg={assets.svg.html5} title={'HTML5'}/>
            <IconCircle svg={assets.svg.css3} title={'CSS3'}/>
            <IconCircle svg={assets.svg.sketch} title={'Sketch'}/>
            <IconCircle svg={assets.svg.photoshopcc} title={'Photoshop'}/>
          </Flex>
          <Paragraph textAlign='center' >Design and code integrated into a single service - Prototypes in the morning and working code in the evening.</Paragraph>
        </Container>
        
        <Box w={[1,1, '130%', '137.5%']} ml={[null,null, '-30%', '-37.5%']}>
          <MacbookDisplay>
            <Image src={assets.screenshots.singlePage}/>
          </MacbookDisplay>
        </Box>
      </div>
    ),
    developmentFrontend: (
      <div>
        <Container w={[1,1, 0.6]} py={[25]}>
            <Flex align={['center']} justify={['space-evenly']} pt={[10,20]} gradient='blue' p={[10]} br={[4]} b={['1px solid']} bc='white' bs={[3]} my={[10,20]} >
              <IconCircle svg={assets.svg.react} title={'React'}/>
              <IconCircle svg={assets.svg.reactRouter} title={'React Router'}/>
              <IconCircle svg={assets.svg.redux} title={'Redux'}/>
              <IconCircle svg={assets.svg.reduxSaga} title={'Sagas'}/>
            </Flex>
            <Paragraph textAlign='center' >Design and code integrated into a single service - Prototypes in the morning and working code in the evening.</Paragraph>
          </Container>
        <Box w={[1,1, '130%', '137.5%']} ml={[null,null, '-30%', '-37.5%']}>
          <MacbookDisplay>
            <Image src={assets.screenshots.application}/>
          </MacbookDisplay>
        </Box>
      </div>
    ),
    visionFrontend: (
      <div>
        <Container w={[1,1, 0.6]} py={[25]}>
            <Flex align={['center']} justify={['space-evenly']} pt={[10,20]} gradient='blue' p={[10]} br={[4]} b={['1px solid']} bc='white' bs={[3]} my={[10,20]} >
              <IconCircle svg={assets.svg.flowChart} svgStyled={{svgColor:'blue'}} title={'Integrated'}/>
              <IconCircle svg={assets.svg.folderLinked} svgStyled={{svgColor:'blue'}} title={'Optimized'}/>
              <IconCircle svg={assets.svg.idea} svgStyled={{svgColor:'orange'}} title={'Fluid'}/>
              <IconCircle svg={assets.svg.chromosome} svgStyled={{svgColor:'green'}} title={'Holistic'}/>
            </Flex>
            <Paragraph textAlign='center' >Design and code integrated into a single service - Prototypes in the morning and working code in the evening.</Paragraph>
          </Container>
        <Box w={[1,1, '130%', '137.5%']} ml={[null,null, '-30%', '-37.5%']}>
          <MacbookDisplay>
            <Image src={assets.screenshots.application}/>
          </MacbookDisplay>
        </Box>
      </div>
    ),


    designBackend: (
      <div>
        <Container w={[1,1, 0.6]} py={[25]}>
            <Flex align={['center']} justify={['space-evenly']} pt={[10,20]} gradient='blue' p={[10]} br={[4]} b={['1px solid']} bc='white' bs={[3]} my={[10,20]} >
              <IconCircle svg={assets.svg.webpack} title={'Webpack'}/>
              <IconCircle svg={assets.svg.gulp} title={'Gulp'}/>
              <IconCircle svg={assets.svg.nodeSass} title={'Node/Sass'}/>
              <IconCircle svg={assets.svg.terminal} title={'Terminal'}/>
            </Flex>
            <Paragraph textAlign='center' >Design and code integrated into a single service - Prototypes in the morning and working code in the evening.</Paragraph>
          </Container>
        <Box w={[1,1, '130%', '137.5%']} >
          <MacbookDisplay>
            <Image src={assets.screenshots.application}/>
          </MacbookDisplay>
        </Box>
      </div>
    ),
    developmentBackend: (
      <div>
        <Container w={[1,1, 0.6]} py={[25]}>
            <Flex align={['center']} justify={['space-evenly']} pt={[10,20]} gradient='blue' p={[10]} br={[4]} b={['1px solid']} bc='white' bs={[3]} my={[10,20]} >
              <IconCircle svg={assets.svg.nodejs} title={'Node.JS'}/>
              <IconCircle svg={assets.svg.docker} title={'Docker'}/>
              <IconCircle svg={assets.svg.gCloud} title={'Google Cloud'}/>
              <IconCircle svg={assets.svg.c} title={'C++'}/>
            </Flex>
            <Paragraph textAlign='center' >Design and code integrated into a single service - Prototypes in the morning and working code in the evening.</Paragraph>
          </Container>
        <Box w={[1,1, '130%', '137.5%']} >
          <MacbookDisplay>
            <Image src={assets.screenshots.application}/>
          </MacbookDisplay>
        </Box>
      </div>
    ),
    visionBackend: (
      <div>
        <Container w={[1,1, 0.6]} py={[25]}>
            <Flex align={['center']} justify={['space-evenly']} pt={[10,20]} gradient='blue' p={[10]} br={[4]} b={['1px solid']} bc='white' bs={[3]} my={[10,20]} >
              <IconCircle svg={assets.svg.flowChart} svgStyled={{svgColor:'blue'}} title={'Elegant'}/>
              <IconCircle svg={assets.svg.folderLinked} svgStyled={{svgColor:'blue'}} title={'Serverless'}/>
              <IconCircle svg={assets.svg.idea} svgStyled={{svgColor:'orange'}} title={'Integrated'}/>
              <IconCircle svg={assets.svg.chromosome} svgStyled={{svgColor:'green'}} title={'Holistic'}/>
            </Flex>
            <Paragraph textAlign='center' >Design and code integrated into a single service - Prototypes in the morning and working code in the evening.</Paragraph>
          </Container>
        <Box w={[1,1, '130%', '137.5%']} >
          <MacbookDisplay>
            <Image src={assets.screenshots.application}/>
          </MacbookDisplay>
        </Box>
      </div>
    ),
  }
}

export default LIBRARY_CATALOG_ADVANCED