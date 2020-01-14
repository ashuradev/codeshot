const defaultValue = `
# Titulo

Conteúdo do post...
`;

const settings = {
  language: 'markdown',
  languages: [],
  theme: 'vs-light',
  isEditorMounted: false,
  fontSize: 25,
  width: 1080,
  height: 1080,
  lineNumbers: 'off',
  wordWrap: 'on',
  code: defaultValue,
  minimap: {
    enabled: false
  },
  fontLigatures: true,
  fontFamily: '"Fira Code", Consolas, "Courier New", monospace'
};

export default settings;
