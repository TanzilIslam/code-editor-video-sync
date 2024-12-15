'use client'
import { useRef, useEffect } from 'react'

export default function CodePreview({ code }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    if (iframeRef.current) {
      const doc =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow.document
      doc.open()
      doc.write(code)
      doc.close()
    }
  }, [code])

  return (
    <iframe
      ref={iframeRef}
      title="HTML Preview"
      style={{
        border: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  )
}
