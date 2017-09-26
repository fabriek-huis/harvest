/* ------------------------- External Dependencies -------------------------- */
import React from 'react'

/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { BackgroundImage, BackgroundGradient, Heading, Paragraph, SVG} from 'atomic'
const CardBackground = props => props ? <BackgroundImage image={props.image} h={props.height} o={props.o} /> : <BackgroundGradient />

/* --- General --- */
export const generalCard = (item) => ( [
  {
    type: 'background',
    content: [
      <BackgroundGradient z={[5]} o={[0.5]} />,
      <CardBackground image={item.bg} o={[0.7]} />,
      <Heading color="white" textShadow={[0,1]} children={item.title} />
    ],
    layout: {
      gradient: 'secondary',
      p: 20,
      pt: [15, 30, 45],
    }
  },
  {
    type: 'body',
    content: [
      <Paragraph children={item.description} />
    ],
    layout: {
      p: 22
    }
  }
])

/* --- Horizontal --- */
export const horizontalCard = (item) => ( [
  {
    type: 'background',
    content: [
      <img src={item.image}/>,
    ],
    layout: {
      align: 'center',
      p: [0,0, 20],
      w: [0.5, 0.3],
    }
  },
  {
    type: 'body',
    content: [
      <div>
        <Heading f={[3]} level={3} children={item.title} /> <Paragraph children={item.description} />
      </div>,
      
    ],
    layout: {
      p: [5,5,20],
      w: [1, 0.7],
      
    }
  }
])

/* --- Shapes --- */
export const shapeCard = (item) => ( [
  {
    type: 'background',
    content: [
      <BackgroundGradient z={[5]} o={[0.5]} />,
      <CardBackground image={item.bg} o={[0.7]} />,
      <SVG bottom left right h="55px" svg={assets.shapes.mountain} />,
    ],
    layout: {
      gradient: 'secondary',
      p: 20,
      py: [15, 30, 95],
    }
  },
  {
    type: 'body',
    content: [
        <Heading color="white" textShadow={[0,1]} children={item.title} />,
        <Paragraph children={item.description} />,
    ],
    layout: {
      bg: 'blue',
      color: 'white',
      direction: ['column'],
      p: 22,
      pb: [15, 30, 45],
    }
  }
])

/* --- Video --- */
export const videoCard = (item) => ( [
  {
    type: 'background',
    content: [
      <SVG w={[95]} h={[95]} svg={assets.shapes.play} />,
      <BackgroundGradient z={[5]} o={[0.5]} gradient='blackTransparent' radial />,
      <SVG bottom left right h="55px" svg={assets.shapes.mountain} />,
    ],
    layout: {
      align: 'center',
      justify: 'center',
      p: 20,
      py: [15, 30, 95],
    }
  },
  {
    type: 'body',
    content: [
        <Heading color="white" textShadow={[0,1]} children={item.title} />,
        <Paragraph children={item.description} />,
    ],
    layout: {
      bg: 'blue',
      color: 'white',
      direction: ['column'],
      p: 22,
      pb: [15, 30, 45],
    }
  }
])

export default { generalCard, shapeCard, videoCard, horizontalCard }