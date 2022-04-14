import styles from './styles.module.css'
import { Comment } from '../../Icons/Comment'
import { Heart } from '../../Icons/Heart'
import { Share } from '../../Icons/Share'

const VideoPlayerActions = ({ likes = 12332, comments = 122, shares = 30 }) => {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart width='45' />
        <strong>{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comment width='45' />
        <strong>{comments}</strong>
      </div>
      <div className={styles.action}>
        <Share width='45' />
        <strong>{shares}</strong>
      </div>
    </aside>
  )
}

export default VideoPlayerActions
