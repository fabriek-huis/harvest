import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Span from '.'

storiesOf('Span', module)
  .add('default', () => (
    <Span>
      A Span Example
    </Span>
  ))
  .add('color', () => (
    <Span color='red' >
      A Span Example
    </Span>
  ))
