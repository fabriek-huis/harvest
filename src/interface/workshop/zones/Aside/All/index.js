/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { AsideDrawerMenu, TemplateNotifications } from 'foundry'

export default props => (
  <Flex direction='column' w={[1]} >
    <TemplateNotifications/>
    <AsideDrawerMenu/>
  </Flex>
)