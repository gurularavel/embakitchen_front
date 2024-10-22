import Image, { type StaticImageData } from 'next/image'

interface BannerProps {
  title: string
  img: string | StaticImageData
}

const bannerStyles: Readonly<TwClasses> = {
  container:
    'w-full h-50 laptop:h-[25rem] laptop:px-15 widescreen:px-0 my-6 laptop:my-10',
  wrapper: 'h-full relative',
  titleWrapper:
    'flex items-center justify-center absolute top-0 right-0 bottom-0 left-0 bg-black/40',
  title:
    'text-2xl laptop:text-[56px] laptop:leading-[68.26px] font-semibold text-white',
  img: 'w-full h-full object-cover',
}
const styles = bannerStyles as Readonly<StyleRecord>

export function Banner({
  title,
  img,
}: Readonly<BannerProps>): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <Image
          src={img}
          alt='Embakitchen about company page'
          className={styles.img}
        />
      </div>
    </div>
  )
}
