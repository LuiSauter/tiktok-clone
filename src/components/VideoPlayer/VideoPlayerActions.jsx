import styles from './styles.module.css'
import { Comment } from '../Icons/Comments'
import { Heart } from '../Icons/Heart'
import { Share } from '../Icons/Share'

const VideoPlayerActions = () => {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart width='45' />
      </div>
      <div className={styles.action}>
        <Comment width='45' />
      </div>
      <div className={styles.action}>
        <Share width='45' />
      </div>
    </aside>
  )
}

export default VideoPlayerActions
