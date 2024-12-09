import { Video } from '~ek/components'
import type { MediaFile } from '~ek/types'

interface OffersProps {
  video: MediaFile
}

const offersStyles: Readonly<TwClasses> = {
  container: '',
  videoWrapper: 'px-4',
}
const styles = offersStyles as Readonly<StyleRecord>

export function Offers({ video }: Readonly<OffersProps>): React.ReactElement {
  return (
    <div
      className={styles.container}
      style={{ border: '2px solid red' }}
    >
      <div className={styles.videoWrapper}>
        <Video video={video} />
      </div>

      <div></div>
    </div>
  )
}
