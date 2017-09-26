import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Molecule } from '.'

storiesOf('Molecule', module)
  .add('default', () => (
    <Molecule>Hello</Molecule>
  ))
  .add('reverse', () => (
    <Molecule reverse>Hello</Molecule>
  ))
