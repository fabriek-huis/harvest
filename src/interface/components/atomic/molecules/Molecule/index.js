import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Molecule = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

Molecule.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Molecule
