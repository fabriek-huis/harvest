/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute } from 'particles'
/* ------------------------ Initialize Dependencies ------------------------- */
import { getZonesDashboard } from 'store/departments/theme/selectors'
import { DashboardHeader, DashboardMain, DashboardAside } from 'layout/zones'
import { DashboardMainRoutes, DashboardHeaderRoutes, DashboardAsideRoutes } from 'store/routes'

const DashboardWrapper = styled.div`
  bottom: 0 ; left: 0; top: 0; bottom: 0;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`

const DashboardEntry = props=>(
<Absolute left right top bottom >
  {/* Header Zone */}
  {!props.zones.header ? null: (
    <DashboardHeader {...props.header.layout} >
      <DashboardHeaderRoutes/>
    </DashboardHeader>
  )}


  {/* Main Zone */}
  {!props.zones.main ? null: (
    <DashboardMain {...props.main.layout}>
      <DashboardMainRoutes/>
    </DashboardMain>
  )}

  {/* Aside Zone */}
  {!props.zones.aside ? null :(
    <DashboardAside {...props.aside.layout}>
      <PerfectScrollbar >
        <DashboardAsideRoutes/>
      </PerfectScrollbar>
    </DashboardAside>
  )}
</Absolute>)

/* -------------------------- Store Connection ----------------------------- */
function mapStateToProps(state) {
   const { header, aside, main, zones, regions } = getZonesDashboard(state)

  return {
    header, aside, main, zones, regions
  };
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEntry);
