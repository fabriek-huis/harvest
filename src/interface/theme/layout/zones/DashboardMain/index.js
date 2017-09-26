/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Absolute } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
const DashboardMainStyled = styled(Absolute)`
  overflow-x: hidden;
  overflow-y: scroll;
`
DashboardMainStyled.defaultProps = {
  is: 'main'
}
/* ---------------------------- Module Package ------------------------------ */
export default props => <DashboardMainStyled bs={2} top bottom right left {...props} {...props.layout}/>