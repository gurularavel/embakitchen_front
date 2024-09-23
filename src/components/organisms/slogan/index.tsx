import { Button } from '~ek/components'

interface SloganProps {
  slogans: [string, string]
}

const sloganStyles: Readonly<TailwindStyle> = {
  container:
    'bg-gray-1 bg-slogan-section h-[440px] flex items-center justify-center mb-6 laptop:mb-25',
  wrapper: 'max-w-72 laptop:max-w-4xl',
  s1: 'text-base laptop:text-xl leading-6 laptop:leading-7 font-medium text-primary-5 text-center uppercase',
  s2: 'text-2xl laptop:text-4xl leading-8 laptop:leading-13 font-semibold text-white text-center mt-6 mb-10',
  buttonWrapper: 'flex justify-center',
  button:
    'text-base leading-6 font-semibold text-auxiliary-4 bg-primary-2 w-full laptop:w-[215px] h-14 rounded-md',
}
const styles = sloganStyles as Readonly<StyleRecord>

export function Slogan({
  slogans: [s1, s2],
}: Readonly<SloganProps>): ReactComponent {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h4 className={styles.s1}>{s1}</h4>
        <h4 className={styles.s2}>{s2}</h4>
        <div className={styles.buttonWrapper}>
          <Button classes={styles.button}>Özəl sifariş yarat</Button>
        </div>
      </div>
    </section>
  )
}
