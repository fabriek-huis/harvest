/* ------------------------- External Dependencies -------------------------- */
import { PropTypes } from 'react'
import styled from 'styled-components'
import { Block } from 'atomic'
/* --------------------------- Styled Component ----------------------------- */
const Container = styled(Block)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

Container.propTypes = {

}

Container.defaultProps = {
  px: [20, 10, 0],
  w: [1, 1, 1120]
}

export default Container
