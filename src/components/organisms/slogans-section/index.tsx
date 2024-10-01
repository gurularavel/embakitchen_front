import { Button } from '~ek/components'

interface SlogansSectionProps {
  slogans: [string, string]
}

const slogansSectionStyles: Readonly<TwClasses> = {
  slogansSection:
    'bg-gray-1 bg-slogans-section h-[360px] laptop:h-[440px] flex items-center justify-center mb-6 laptop:mb-25',
  slogansContent: 'max-w-72 laptop:max-w-4xl',
  s1: 'text-base laptop:text-xl leading-6 laptop:leading-7 font-medium text-primary-5 text-center uppercase mb-6',
  s2: 'text-2xl laptop:text-4xl leading-8 laptop:leading-14 font-semibold text-white text-center mb-10',
  buttonWrapper: 'flex justify-center',
  specialOrderButton:
    'w-full mobile:w-72 laptop:w-[215px] h-14 bg-primary-2 rounded-md text-base leading-6 font-semibold text-tertiary-11',
}
const styles = slogansSectionStyles as Readonly<StyleRecord>

export function SlogansSection({
  slogans: [s1, s2],
}: Readonly<SlogansSectionProps>): React.ReactElement {
  return (
    <section className={styles.slogansSection}>
      <div className={styles.slogansContent}>
        <h4 className={styles.s1}>{s1}</h4>
        <h4 className={styles.s2}>{s2}</h4>
        <div className={styles.buttonWrapper}>
          <Button classes={styles.specialOrderButton}>
            Özəl sifariş yarat
          </Button>
        </div>
      </div>
    </section>
  )
}
