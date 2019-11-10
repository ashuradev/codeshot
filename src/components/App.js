import React, { useState } from 'react'
import MonacoEditor from 'react-monaco-editor'
import Box from '@material-ui/core/Box'

import Header from './Header'

const App = () => {
  const [options, setOptions] = useState({
    theme: 'vs-dark',
    language: 'javascript'
  })

  const defaultValue = "console.log('Olá, mundo!')"

  const handleEditorDidMount = ()

  return (
    <>
      <MonacoEditor 
        language={options.language}
        theme={options.theme}
        value={defaultValue}
        editorDidMount={handleEditorDidMount}
      />
    </>
  )
}

export default App