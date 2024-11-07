'use client'

import * as React from 'react'
import { Button, Icon } from '~ek/components'

interface VideoProps {
  src: string
}

const videoStyles: Readonly<TwClasses> = {
  wrapper:
    'w-full h-[193px] laptop:h-[759px] px-0 laptop:px-15 widescreen:px-0 mb-6 laptop:mb-10 relative',
  video: (shouldPlay: unknown) =>
    `w-full h-full object-cover ${(shouldPlay as boolean) ? 'cursor-pointer' : ''}`,
  icon: (shouldPlay: unknown) =>
    `w-[76px] h-20 tablet:w-20 laptop:w-[140px] laptop:h-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${(shouldPlay as boolean) ? 'hidden' : 'block'}`,
}
const styles = videoStyles as Readonly<StyleRecord>
const getVideoStyles = videoStyles.video as StyleGetter
const getIconStyles = videoStyles.icon as StyleGetter

export function Video({ src }: Readonly<VideoProps>): React.ReactElement {
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

  const handleVideoPlay = (shouldPlay: boolean): void =>
    setShouldPlay(shouldPlay)

  return (
    <div className={styles.wrapper}>
      <video
        src={src}
        className={getVideoStyles(shouldPlay)}
        ref={videoRef}
        onClick={() => handleVideoPlay(false)}
        onEnded={() => handleVideoPlay(false)}
      ></video>

      <Button onClick={() => handleVideoPlay(true)}>
        <Icon
          variant='play-video'
          sizes={getIconStyles(shouldPlay)}
        />
      </Button>
    </div>
  )
}
