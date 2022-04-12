import React, { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/3be947bc15f984b5348f3b9e85a142c7/62552f7c/video/tos/useast2a/tos-useast2a-ve-0068c002/60704325c3f4411dabeab33738678697/?a=1988&br=3302&bt=1651&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8Z6qnhwe2Ni3oyl7Gb&l=2022041201511201022312805010A724D9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2lqdDU6ZmRoPDMzNzczM0ApMzNkNDwzNDw3N2U2PDNkZmdjZV9ncjRfNS9gLS1kMTZzc2A2YC1jMy81YWNfYmA0XmI6Yw%3D%3D&vl=&vr='

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video ref={video} loop className={styles.video} src={SRC} controls={false} />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}

export default VideoPlayer
