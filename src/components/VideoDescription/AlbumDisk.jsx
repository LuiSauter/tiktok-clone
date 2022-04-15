import React from 'react'
import styles from './styles.module.css'

const AlbumDisk = ({ albumCover }) => {
  return (
    <div className={styles.album}>
      <img className={styles.albumImage} src={albumCover} />
    </div>
  )
}

export default AlbumDisk
