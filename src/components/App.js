import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import html2canvas from 'html2canvas';

import settings from '../config/editor.js';

import '../styles/editor.css';

import Logo from './Logo';
import Controls from './Controls';

const App = () => {
  const [editor, setEditor] = React.useState();
  const [options, setOptions] = React.useState(settings);

  const onEditorDidMount = async (editor, monaco) => {
    setEditor(editor);

    setOptions({
      ...options,

      languages: monaco.languages.getLanguages().map(language => ({
        id: language.id,
        name: language.aliases[0] || language.id
      })),

      isEditorMounted: true
    });
  };

  const save = () =>
    html2canvas(editor.getDomNode()).then(canvas => {
      const a = document.createElement('a');

      a.href = canvas
        .toDataURL('image/jpeg')
        .replace('image/jpeg', 'image/octet-stream');
      a.download = '';
      a.click();
    });

  const onChange = newValue =>
    setOptions({
      ...options,

      code: newValue
    });

  return (
    <>
      <Logo />
      <Controls setOptions={setOptions} options={options} save={save} />
      <MonacoEditor
        language={options.language}
        theme={options.theme}
        height={options.height}
        width={options.width}
        options={options}
        editorDidMount={onEditorDidMount}
        value={options.code}
        onChange={onChange}
      />
    </>
  );
};

export default App;
