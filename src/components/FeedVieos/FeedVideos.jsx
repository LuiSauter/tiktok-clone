import React, { useEffect, useState } from 'react'
import { getVideos } from '../../services/services'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import styles from './styles.module.css'

const FeedVideos = () => {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      getVideos().then(([error, Videos]) => {
        if (error) setError(error)
        setVideos(Videos)
        console.log(Videos)
      })
    }
    return () => {
      cleanup = false
    }
  }, [])

  if (error) {
    return (
      <span>{error}</span>
    )
  }

  return (
    videos.map(video => {
      const { user = {} } = video
      return (
        <div className={styles.item} key={video.id}>
          <VideoPlayer {...video} username={user.username} />
        </div>
      )
    })
  )
}

export default FeedVideos
