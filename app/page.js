'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { codeStates } from '@/utils/staticData'

const CodeEditor = dynamic(() => import('./CodeEditor'))
const CodePreview = dynamic(() => import('./CodePreview'))
const VideoPlayer = dynamic(() => import('./VideoPlayer'))

export default function Home() {
  const [code, setCode] = useState(codeStates[0])
  const [currentTime, setCurrentTime] = useState(0)
  const handleProgress = (time) => {
    setCurrentTime(time)
    const closestTime = Object.keys(codeStates)
      .reverse()
      .find((timestamp) => time >= timestamp)
    if (closestTime) {
      setCode(codeStates[closestTime])
    }
  }

  const handleSeek = (time) => {
    setCurrentTime(time)
    const closestTime = Object.keys(codeStates)
      .reverse()
      .find((timestamp) => time >= timestamp)
    if (closestTime) {
      setCode(codeStates[closestTime])
    }
  }
  return (
    <div className="px-4 py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center mb-5">
        Next Gen Code Editor with Video Sync
      </h1>
      <div className="space-x-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div>
          <p className="text-2xl font-semibold">Video</p>
          <VideoPlayer
            url={'/html.mp4'}
            onProgress={handleProgress}
            onSeek={handleSeek}
          />
        </div>

        <div>
          <p className="text-2xl font-semibold">Code Editor</p>
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <div className="h-full">
          <p className="text-2xl font-semibold">Output</p>
          <div className="border p-4 h-full">
            <CodePreview code={code} />
          </div>
        </div>
      </div>
    </div>
  )
}
