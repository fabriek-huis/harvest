import 'theme/stylesheet/app.global.css';
import React from 'react';
import { storiesOf, action, linkTo,configure, addDecorator  } from '@kadira/storybook';
import { ThemeProvider} from 'styled-components'
import themeSettings from 'theme/settings'


const req = require.context('../src/interface/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={themeSettings}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
