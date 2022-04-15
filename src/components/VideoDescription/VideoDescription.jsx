import React from 'react'
import SongTicker from '../SongTicker/SongTicker'
import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'

const VideoDescription = ({ albumCover, username, description, songTitle }) => {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <a className={styles.author} href={`/user/${username}`}>
          @{username}
        </a>
        <p className={styles.text}>
          {description}
        </p>
        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>

    </footer>
  )
}

export default VideoDescription
