import React from 'react';
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  TextField
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const Control = styled(FormControl)({
  margin: '0 12.5px'
});

const Controls = ({ options, setOptions, save }) => {
  const handleChange = event =>
    setOptions({
      ...options,

      [event.target.name]: event.target.value
    });

  return (
    options.isEditorMounted && (
      <Box display="flex" justifyContent="center" alignItems="center" my={4}>
        <Control>
          <InputLabel>Linguagem</InputLabel>
          <Select
            name="language"
            onChange={handleChange}
            value={options.language}
          >
            {options.languages.map(({ id, name }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Control>

        <Control>
          <TextField
            label="Família da fonte"
            value={options.fontFamily}
            name="fontFamily"
            onChange={handleChange}
            margin="normal"
          />
        </Control>

        <Control>
          <TextField
            label="Tamanho da fonte"
            value={options.fontSize}
            name="fontSize"
            onChange={handleChange}
            margin="normal"
            type="number"
          />
        </Control>

        <Control>
          <TextField
            label="Largura do editor"
            value={options.width}
            name="width"
            onChange={handleChange}
            margin="normal"
          />
        </Control>

        <Control>
          <TextField
            label="Altura do editor"
            value={options.height}
            name="height"
            onChange={handleChange}
            margin="normal"
          />
        </Control>

        <Control>
          <InputLabel>Mostrar linhas?</InputLabel>
          <Select
            name="lineNumbers"
            onChange={handleChange}
            value={options.lineNumbers}
          >
            {[
              ['on', 'Sim'],
              ['off', 'Não']
            ].map(([key, value]) => (
              <MenuItem value={key} key={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </Control>

        <Control>
          <Button color="primary" variant="contained" onClick={save}>
            Salvar
          </Button>
        </Control>
      </Box>
    )
  );
};

export default Controls;
