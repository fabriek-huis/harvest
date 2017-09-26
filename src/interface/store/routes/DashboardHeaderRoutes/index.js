/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import { Block } from 'atomic'
/* ------------------------- External Dependencies -------------------------- */
import Front from 'workshop/pages/main/Front'
import { BlockBranding }  from 'workshop/blocks'

const HeaderRoutes = styled(Block)``

HeaderRoutes.defaultProps = {
  pos: 'relative',
  z: 5
}

export default () => (
  <HeaderRoutes>
    <Route path="/dashboard" component={BlockBranding} />
  </HeaderRoutes>);

