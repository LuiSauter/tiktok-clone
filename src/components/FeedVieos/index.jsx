import React from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 0,
    author: 'Parra',
    description: 'Reto baila con ropa caca y luego sin ropa',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - elchicocaca',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2c0c4b2e7f2b4961be1b52663e939474~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/3be947bc15f984b5348f3b9e85a142c7/62552f7c/video/tos/useast2a/tos-useast2a-ve-0068c002/60704325c3f4411dabeab33738678697/?a=1988&br=3302&bt=1651&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8Z6qnhwe2Ni3oyl7Gb&l=2022041201511201022312805010A724D9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2lqdDU6ZmRoPDMzNzczM0ApMzNkNDwzNDw3N2U2PDNkZmdjZV9ncjRfNS9gLS1kMTZzc2A2YC1jMy81YWNfYmA0XmI6Yw%3D%3D&vl=&vr='
  },
  {
    id: 1,
    author: 'tyuru',
    description: 'El color negro se llama negro porque es negro.',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - elchicocaca',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2c0c4b2e7f2b4961be1b52663e939474~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/85fb1c823d44003e00337f47989bb877/625627e0/video/tos/useast2a/tos-useast2a-ve-0068c003/4bb2e71ca889481889db830871a08084/?a=1988&br=2870&bt=1435&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8ZGIZhwe2NeRTyl7Gb&l=20220412193015010223066171276A2B90&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2g5OmQ6ZmtvOzMzNzczM0ApZWU6NTkzaDtlNzs0OWZmNWdfL2wxcjQwYmlgLS1kMTZzc2EyMl5eNGJfMGBgLjU0XjQ6Yw%3D%3D&vl=&vr='
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
