import assets from 'assets'
const drawerMenuItems = [
  /*--- Projects ---*/
  {
    title: 'Mining Statistics',
    to: '/dashboard/statistics',
    svg: assets.svg.networkCentral,
    gradient: 'green'
  },
  {
    title: 'Market Opportunity',
    to: '/dashboard/opportunity',
    svg: assets.svg.mobileMoney,
    gradient: 'orange'
  },
  {
    title: 'Energy Consumption',
    to: '/dashboard/resources',
    svg: assets.svg.dataMining,
    gradient: 'turqoise'
  },
  {
    title: 'Pool Payout',
    to: '/dashboard/pool',
    svg: assets.svg.brain,
    gradient: 'limeHarmonic'
  },
  {
    title: 'Open Governance',
    to: '/dashboard/governance',
    svg: assets.svg.government,
    gradient: 'politics'
  },
]

export default drawerMenuItems