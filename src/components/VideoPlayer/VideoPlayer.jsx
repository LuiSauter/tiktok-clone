import styles from './styles.module.css'
import React, { useRef } from 'react'
import clsx from 'clsx'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription/VideoDescription'
import { useIntersectionVideoPlayer } from '../../hooks/useIntersectionVideoPlayer'

const VideoPlayer = (props) => {
  const video = useRef(null)
  const { handlePlay, playing } = useIntersectionVideoPlayer({ video })

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
        autoPlay={false}
      />
      <i onClick={handlePlay} className={playerClassName} />
      <VideoPlayerActions {...props} />
      <VideoDescription {...props} />
    </div>
  )
}

export default VideoPlayer
