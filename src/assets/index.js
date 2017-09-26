/* ------------------------- Internal Dependencies -------------------------- */
// import MacbookPro from 'assets/devices/mbp.png'
// import AllDevices from 'assets/devices/all-devices-abstract-reverse.png'
// import SinglePage from 'assets/devices/single-page.png'
// import Smartphone from 'assets/devices/smartphone-pixel.png'


import mountain from 'assets/shapes/mountain.svg'
import slack from 'assets/shapes/slack.svg'
import play from 'assets/shapes/play.svg'
import curve from 'assets/shapes/curve.svg'
import triangleTopLeft from 'assets/shapes/triangleTopLeft.svg'
import triangleBottomLeft from 'assets/shapes/triangleBottomLeft.svg'
import tree from 'assets/shapes/tree.svg'

import background from './background.js'
import images from './images.js'
import devices from './devices.js'
import graphics from './graphics.js'
import icons from './icons.js'
import shapes from './shapes.js'
import screenshots from './screenshots.js'

const assets = {
  graphics: {
    ...graphics
  },
  devices: {
    ...devices
  },
  icons: {
    ...icons
  },
  bg: {
    ...background
  },
  images: {
    ...images
  },
  shapes: {
    
    mountain,
    slack,
    play,
    triangleTopLeft,
    triangleBottomLeft,
    curve,
    tree,
  },
  svg: {
    ...shapes
  },
  screenshots: {
    ...screenshots
  }
}

export default assets