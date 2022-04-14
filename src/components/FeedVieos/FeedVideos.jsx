import React from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
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
    src: 'https://v16-webapp.tiktok.com/edcfcc75322d4a9baf115845641ec274/62589287/video/tos/useast2a/tos-useast2a-ve-0068c004/f735362f97a24db99f8b5ee2ca1c09af/?a=1988&br=3574&bt=1787&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8ZTY3Lwe2NFceyl7Gb&l=20220414153004010223123014153001F4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M21raTs6Zms7OzMzNzczM0ApZmk3aWdnM2VkNzM5OjllPGdtMl4xcjRfbDRgLS1kMTZzc2NiMDYwNWNeX18vNC9fYDM6Yw%3D%3D&vl=&vr='
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
    src: 'https://v16-webapp.tiktok.com/df66f4e0ec47e45b361f0806a4182b04/62589253/video/tos/useast2a/tos-useast2a-ve-0068c001/7ae069ec1b0b44479437c91b477b21b6/?a=1988&br=3194&bt=1597&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8Z7Y3Lwe2Njz3yl7Gb&l=20220414152919010223066035222FEC16&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2xtbmU6ZnJ3OjMzNzczM0ApZjk5ZzhnM2U8NzM7aTQ3ZGc1aGhpcjQwMGxgLS1kMTZzc2FhMjI2Y142YjMtX2MwXjM6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'tyuru',
    description: 'El color negro se llama negro porque es negro.',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - elchicocaca',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2c0c4b2e7f2b4961be1b52663e939474~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/bec0f6246a5c6b634079390689aed922/62589285/video/tos/useast2a/tos-useast2a-ve-0068c003/5286a94cc2144ef29776e10d254311ba/?a=1988&br=2564&bt=1282&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAMMyq8ZTY3Lwe2NFceyl7Gb&l=20220414153004010223123014153001F4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anVrOWY6ZnV3PDMzNzczM0ApOmZkZjgzaGVnNzQ4NTM2PGdlMDRucjRfY15gLS1kMTZzczMtMjVhMmAzM2IyNC1jYzI6Yw%3D%3D&vl=&vr='
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
