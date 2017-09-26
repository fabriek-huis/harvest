/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
/* ------------------------- Internal Dependencies -------------------------- */
import { Fixed} from 'particles'
/* ------------------------ Initialize Dependencies ------------------------- */
import { getZones } from 'store/departments/theme/selectors'
import { BlockBranding, BlockTop }  from 'workshop/blocks'
import { SiteHeader, SiteMain, SiteFooter } from 'layout/zones'
import { SiteMainRoutes, SiteHeaderRoutes, SiteFooterRoutes } from 'store/routes'
import { FooterContext }  from 'workshop/sections'

const SiteEntry = props=>(
<div >
  <Fixed top left right w={[1]} z={500}>
    <BlockTop/>
    <BlockBranding/>
  </Fixed>

  {/* Header Zone */}
  {!props.zones.header ? null: (
    <SiteHeader {...props.header.layout} >
      <SiteHeaderRoutes/>
    </SiteHeader>
  )}

  {/* Main Zone */}
  {!props.zones.main ? null: (
    <SiteMain {...props.main.layout}>
      <SiteMainRoutes/>
    </SiteMain>
  )}

  {/* Footer Zone */}
  {!props.zones.footer ? null :(
    <SiteFooter {...props.footer.layout}>

    </SiteFooter>
  )}
</div>)

/* -------------------------- Store Connection ----------------------------- */
function mapStateToProps(state) {
  const { header, sidebar, footer, main, zones, regions } = getZones(state)

  return {
    header, footer, main, zones, regions
  };
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SiteEntry);
