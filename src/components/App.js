import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import html2canvas from 'html2canvas'
import draculaTheme from './../themes/dracula.json'

import Header from './Header'

const defaultValue = `
<?php

echo 'Oi, tudo bem?';
`

const App = () => {
  const [editor, setEditor] = React.useState()

  const [options, setOptions] = React.useState({
    language: 'php',
    languages: [],
    theme: 'vs-dark',
    isEditorMounted: false,
    fontSize: 18,
    width: 1079,
    height: 1079,
    lineNumbers: 'off',
    wordWrap: 'on',
    code: defaultValue,
    minimap: {
      enabled: false
    },
    fontLigatures: true,
    fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
  })

  const handleEditorDidMount = async (editor, monaco) => {
    setEditor(editor)

    setOptions({
      ...options,

      languages: monaco.languages.getLanguages().map(language => ({
        id: language.id,
        name: language.aliases[0] || language.id
      })),

      isEditorMounted: true
    })
  }

  const save = () => editor && html2canvas(editor.getDomNode()).then(canvas => {
    const a = document.createElement('a')

    a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream')
    a.download = `go-revolution.jpg`
    a.click()
  })

  const handleCodeChange = newValue => setOptions({
    ...options,

    code: newValue
  })

  return (
    <React.Fragment>
      <Header 
        setOptions={setOptions} 
        options={options} 
        save={save} />
      <MonacoEditor 
        language={options.language}
        theme={options.theme}
        height={options.height}
        width={options.width}
        options={options}
        editorDidMount={handleEditorDidMount} 
        value={options.code} 
        onChange={handleCodeChange} />
    </React.Fragment>
  )
}

export default App