import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Activity',
    svg: assets.svg.backpack,
    destination: 'activity',
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Projects',
    svg: assets.svg.campfire,
    destination: 'projects',
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Responsibility',
    destination: 'Responsibility',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
]

export default drawerMenuItems