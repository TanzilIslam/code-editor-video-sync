'use client'

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'))
const VideoPlayer = ({ url, onProgress, onSeek, onPlay, onPause }) => {
  return (
    <ReactPlayer
      url={url}
      controls
      onProgress={(progress) => onProgress(progress.playedSeconds)}
      onSeek={(time) => onSeek(time)}
      onPlay={onPlay}
      onPause={onPause}
      style={{ objectFit: 'cover' }}
    />
  )
}

export default VideoPlayer
