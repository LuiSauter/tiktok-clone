import React from 'react'

import { MusicIcon } from '../../Icons/MusicIcon'
import styles from './styles.module.css'

const SongTicker = ({ songTitle }) => {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <div className={styles.marquee}>
        <div className={styles.track}>
          <span>sonido original - {songTitle}</span>
          <span>sonido original - {songTitle}</span>
          <span>sonido original - {songTitle}</span>
        </div>
      </div>
    </div>
  )
}

export default SongTicker
