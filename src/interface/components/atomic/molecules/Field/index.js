import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Absolute, Flex, Box } from 'atomic'
import { color, fontSize, space, width } from 'quarks'

import { Label, Input } from 'atomic'

const Error = styled.div`
  margin: 0.5rem 0 0;
`
const Wrapper = styled(Box)`
  position: relative;
  ${space}
  ${width}
  &:after {
    ${color}
    bottom: 0; left: 0; right: 0;
    content: "";
    height: 3px;
    position: absolute;
  }
  

  textarea {
    height: 100px;
  }

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
`

const Field = ({ error, name, invalid, label, value, type, ...props }) => {
  const inputProps = { id: name, name, type, value, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'
  return (
    <Wrapper {...{...props, ...props.stripe} }>
      {renderInputFirst && <Input {...inputProps} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {renderInputFirst || <Input {...inputProps} />}
      {invalid && error &&
        <Error id={`${name}Error`} role="alert" palette="danger">
          {error}
        </Error>
      }
    </Wrapper>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
