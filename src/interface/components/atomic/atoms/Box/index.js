/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Block } from 'atomic'
/* --------------------------- Styled Component ----------------------------- */
const Box = props => <Block {...props} />
Box.defaultProps = {
  is: 'div',
}
export default Box