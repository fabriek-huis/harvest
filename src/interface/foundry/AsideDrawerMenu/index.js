/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { LinkIcon } from 'foundry'
import { AsideMenu } from 'content/menus'
/* ------------------------------- Component -------------------------------- */
const AsideDrawerMenu = props => <div>{AsideMenu.map(item=> <LinkIcon {...item}/> )}</div>
AsideDrawerMenu.defaultProps = {}
export default AsideDrawerMenu