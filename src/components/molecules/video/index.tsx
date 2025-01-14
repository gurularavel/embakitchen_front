'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button, Icon } from '~ek/components'
import type { MediaFile } from '~ek/types'
import { updatePrimitiveState } from '~ek/utils'

interface VideoProps {
  video: MediaFile
  className: string
}

const videoStyles: Readonly<TwClasses> = {
  wrapper: 'w-full mb-6 laptop:mb-10 relative',
  video: (shouldPlay: unknown) =>
    `w-full h-full object-cover ${(shouldPlay as boolean) ? 'cursor-pointer' : ''}`,
  icon: (shouldPlay: unknown) =>
    `w-[76px] h-20 tablet:w-20 laptop:w-[140px] laptop:h-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${(shouldPlay as boolean) ? 'hidden' : 'block'}`,
}
const styles = videoStyles as Readonly<StyleRecord>
const getVideoStyles = videoStyles.video as StyleGetter
const getIconStyles = videoStyles.icon as StyleGetter

export function Video({
  video,
  className,
}: Readonly<VideoProps>): React.ReactElement {
  const [shouldPlay, setShouldPlay] = React.useState<boolean>(false)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  React.useEffect(() => {
    const videoElement = videoRef.current

    if (shouldPlay) {
      videoElement?.play()
    } else {
      videoElement?.pause()
    }
  }, [shouldPlay])

  return (
    <div className={twMerge(styles.wrapper, className ?? '')}>
      <video
        src={video.original_url}
        className={getVideoStyles(shouldPlay)}
        ref={videoRef}
        onClick={() => updatePrimitiveState(false, setShouldPlay)}
        onEnded={() => updatePrimitiveState(false, setShouldPlay)}
      ></video>

      <Button onClick={() => updatePrimitiveState(true, setShouldPlay)}>
        <Icon
          variant='play-video'
          sizes={getIconStyles(shouldPlay)}
        />
      </Button>
    </div>
  )
}
