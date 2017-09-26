/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Box, Flex, BackgroundImage,Button, Heading, Paragraph, Section} from 'atomic'
import { Card } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => (
    <Section of='hidden' >
      <Flex justify={['space-evenly']}>

        <Box w={[1,1, 0.25]}  pos="relative" gradient="blueAlge">
          <BackgroundImage image={assets.images.deskNotes} o={[0.8]}/>
        </Box>

        <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='275deg' gradient={['blueLagoon']} color={['white']} py={[50,165]} px={[20,30,50]} w={[1,1, 0.25]} >
          <Heading f={[3]} level={[5]} ts={[0]}>Instant Liftoff</Heading>
          <Paragraph f={[1]} textAlign='center' >Modern Internet Application built fast, affordably and with vision. Everything from color palette to automated continuous deployment.</Paragraph>
        </Flex>

        <Box w={[1,1, 0.25]}  pos="relative"  gradient="ibize">
          <BackgroundImage image={assets.images.deskGlasses} o={[0.8]} />
        </Box>

        <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='-275deg' gradient={['easyMed']} color={['white']} py={[50,165]} px={[20,30,50]} w={[1,1, 0.25]}>
          <Heading f={[3]} level={[5]} ts={[0]}>Clear Vision</Heading>
          <Paragraph f={[1]} textAlign='center'>The Internet Engineers Guild is on a steadfast mission to connect the builders, thinkers and dreamers of today.</Paragraph>
        </Flex>
      </Flex>
      
      <Flex justify={['space-evenly']}>
        <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='275deg'  gradient={['blue']} color={['white']} py={[50,165]} px={[20,30,50]} w={[1,1, 0.25]}>
          <Heading f={[3]} level={[5]} ts={[0]}>Creating Opportunity</Heading>
          <Paragraph f={[1]} textAlign='center'>Life is an abundance of challenges to overcome. Together we'll identify, execute and help people who need solutions. </Paragraph>
        </Flex>

        <Box w={[1,1, 0.25]}  pos="relative" gradient="greenLush" >
          <BackgroundImage image={assets.images.design} ratio={1} o={[0.7]} />
        </Box>

        <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='-90deg' gradient={['lime']} c color={['white']} py={[50,165]} px={[20,30,50]} w={[1,1, 0.25]} >
          <Heading f={[3]} level={[5]} ts={[0]}>Grassroots Organizing</Heading>
          <Paragraph f={[1]} textAlign='center'>Ignite human creativity boosters for maximum impact. It's time to connect the world's do-ers.</Paragraph>
        </Flex>

        <Box w={[1,1, 0.25]} pos="relative" gradient="purple">
          <BackgroundImage image={assets.images.coding} ratio={1/3}  o={[0.8]}/>
        </Box>

      </Flex>
    </Section>
)
