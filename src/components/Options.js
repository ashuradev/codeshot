import React from 'react'
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const Option = withStyles({
  root: {
    marginRight: 15
  }
})(FormControl)

const Options = () => (
  <Box display="flex" justifyContent="center" my={4}>
    <Option>
      <InputLabel>
        Linguagem
      </InputLabel>
      <Select
        onChange={() => {}}
        value={'javascript'}>
        <MenuItem value={'javascript'}>
          JavaScript
        </MenuItem>
      </Select>
    </Option>

    <FormControl>
      <InputLabel>
        Tema
      </InputLabel>
      <Select
        onChange={() => {}}
        value={'vscode-dark'}>
        <MenuItem value={'vscode-dark'}>
          VSCode Dark
        </MenuItem>
      </Select>
    </FormControl>
  </Box>
)

export default Options