import styles from './styles.module.css'
import { Comment } from '../../Icons/Comment'
import { Heart } from '../../Icons/Heart'
import { Share } from '../../Icons/Share'

const VideoPlayerActions = ({ likes = 12332, comments = 122, shares = 30 }) => {
  const handleLike = () => {
    console.log('click')
  }
  const handleComment = () => {
    console.log('click')
  }
  const handleShare = () => {
    console.log('click')
  }

  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleLike}>
        <Heart width='45' />
        <span title='likes'>{likes}</span>
      </button>
      <button className={styles.action} onClick={handleComment}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>
      <button className={styles.action} onClick={handleShare}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}

export default VideoPlayerActions
