'use client'
import { Editor } from '@monaco-editor/react'

const CodeEditor = ({ code, setCode }) => (
  <Editor
    height="100vh"
    defaultLanguage="html"
    value={code}
    onChange={(value) => setCode(value)}
    theme="vs-dark"
    options={{ fontSize: 16 }}
  />
)
export default CodeEditor
