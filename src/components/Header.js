import React from 'react'
import Container from '@material-ui/core/Container'

import Logo from './Logo'
import Options from './Options'

const Header = ({ setOptions }) => (
  <Container maxWidth="lg">
    <Logo />
    <Options 
      setOptions
    />
  </Container>
)

export default Header