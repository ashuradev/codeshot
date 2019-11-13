import React from 'react'
import Container from '@material-ui/core/Container'

import Logo from './Logo'
import Controls from './Controls'

const Header = ({ options, setOptions, save }) => (
  <Container maxWidth="lg">
    <Logo />
    <Controls 
      setOptions={setOptions}
      options={options}
      save={save}
    />
  </Container>
)

export default Header