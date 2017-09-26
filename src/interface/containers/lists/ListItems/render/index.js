/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box, Grid} from 'particles'
import CardTemplate from 'atomic/templates/CardTemplate'
/* --------------------------- Styled Components ---------------------------- */
const FlexWrapper = styled(Flex)`

`
/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
const Component = (props) => {
  const { renderTree, focusChange } = props
  const Component = renderTree && renderTree.type || null

  return (
    <FlexWrapper wrap='wrap' >
      { !renderTree ? null : renderTree.items.map( (item)=> (
        <Grid flex={['1 0 50%']} w={[0.5]} p={[10,15,20]} >
          <Component {...item} />
        </Grid>
      ))}
    </FlexWrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component