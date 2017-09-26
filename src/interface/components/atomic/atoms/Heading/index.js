/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {color, space, width, fontSize, textShadow, responsiveStyle } from 'quarks'

const display = ({display}) => `${display}`
const textTransformRendered = ({uppercase}) => uppercase ? 'text-transform: uppercase;' : null 

const styles = css`
  ${color}
  display: ${display};
  ${fontSize}
  ${responsiveStyle('font-weight', 'fontWeight')}
  ${responsiveStyle('text-align', 'textAlign')}
  ${textShadow}
  ${textTransformRendered}
  ${space}
  ${width}
`

const Heading = styled(({ level, children, reverse, fontSize, textShadow, palette, margin, display, theme, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

Heading.propTypes = {
  children: PropTypes.node,
  display: PropTypes.string,
  level: PropTypes.number,
  margin: PropTypes.string,
  palette: PropTypes.string,
  paletteIndex: PropTypes.number,
  uppercase: PropTypes.bool,
  reverse: PropTypes.bool,
  textCenter: PropTypes.bool
}

Heading.defaultProps = {
  level: 1,
  display: "block",
  margin: '10px 0 12.5px',
  palette: 'inherit',
  paletteIndex: 0,
}

export default Heading