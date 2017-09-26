/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { LinkIcon } from 'foundry'
import { MenuMain } from 'content/menus'
/* ------------------------------- Component -------------------------------- */
const AsideMenuMain = props => <div>{MenuMain.map(item=> <LinkIcon {...item}/> )}</div>
AsideMenuMain.defaultProps = {}
export default AsideMenuMain