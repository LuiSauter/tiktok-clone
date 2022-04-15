import React from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 0,
    username: 'Parra',
    description: 'Reto baila con ropa caca y luego sin ropa',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - caca',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2c0c4b2e7f2b4961be1b52663e939474~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/44d8319547bcc76bed08bd36b69a0ffc/6259dd0d/video/tos/useast2a/tos-useast2a-pve-0068/ee1ad88098e346d58ea64d2207ce57d5/?a=1988&br=2636&bt=1318&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8Zbt2Lwe2NZ6eyl7Gb&l=202204151500090102231230340B291987&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3I1dTw6ZjZkOzMzNzczM0ApODNoaGlnZTw8NzlmaTNkOmdha2plcjRvaW1gLS1kMTZzcy4wYGAuYWFjMmA1LjIyMGI6Yw%3D%3D&vl=&vr='
  },
  {
    id: 1,
    username: 'tyuru',
    description: 'El color negro se llama negro porque es negro.',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - elchicocaca',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2c0c4b2e7f2b4961be1b52663e939474~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/e2e4a041d38eaba431ab07ee24ccd0d5/6259dce7/video/tos/useast2a/tos-useast2a-ve-0068c001/48f9aa2857304806b2a8feda834ca081/?a=1988&br=3944&bt=1972&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8Zbt2Lwe2NZ6eyl7Gb&l=202204151500090102231230340B291987&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am80bmc6ZjZxPDMzNzczM0ApZzM3NTU3ZWQ1Nzc2OzlnaGdmay1pcjRnYTBgLS1kMTZzc2I2XjA1XzJfLV4zNGJiM2I6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    username: 'elGordo',
    description: 'El color negro se llama negro porque es negro.',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - elchicocaca',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2c0c4b2e7f2b4961be1b52663e939474~c5_200x200.jpeg',
    src: 'https://webapp-va.tiktok.com/d38fc1a2d4d20f13a80d3ae233760810/6259dce0/tos-useast2a-ve-0068c001/30f61796359c4276818f972cc16ae6e4?a=1988&br=2510&bt=1255&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=lcWriHAMMyq8Zbt2Lwe2NZ6eyl7Gb&l=202204151500090102231230340B291987&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MywidWlkIjoiNjgwOTc3OTY5MjM2ODY1OTQ2MSJ9&qs=0&rc=M3lrNzw6Zm1sOjMzNzczM0ApNWc0OGQ4ODtlNzM7NDllaGdgY14ucjRvYWtgLS1kMTZzczMwM2I2NDNfYC4zLWJeNmM6Yw%3D%3D&vl=&vr='
  }
]

const FeedVideos = () => {
  return (
    VIDEOS.map(video => (
      <div className={styles.item} key={video.id}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}

export default FeedVideos
