import styles from './styles.module.css'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription/VideoDescription'

const VideoPlayer = (props) => {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  const { src } = props

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        onClick={handlePlay}
        src={src}
        ref={video}
        controls={false}
        loop
      />
      <i onClick={handlePlay} className={playerClassName} />
      <VideoPlayerActions {...props} />
      <VideoDescription {...props} />
    </div>
  )
}

export default VideoPlayer
