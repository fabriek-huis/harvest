/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { fill, height, space, width } from 'quarks'
import SVGInline from "fusion/ReactSVGInline"
/* --------------------------- Styled Components ---------------------------- */
const SVGInlineStyled = styled(SVGInline)`
    ${height}
    ${space}
    ${width}
    display: inline-block;
    & svg {
      ${height}
      ${fill}
      ${width}
    }
  }
`
/* ------------------------------- Component -------------------------------- */
export default props => <SVGInlineStyled {...props} />
