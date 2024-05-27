import React from 'react'
import { sloganSectionStyles } from '@embakitchen/_components/SloganSection/SloganSection.style'

interface SloganSectionProps {
  title: string
  description: string
}

export const SloganSection: React.FC<SloganSectionProps> = ({
  title,
  description,
}) => {
  const styles: StringPairs = sloganSectionStyles as StringPairs

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{title}</h5>
        <h3 className={styles.description}>{description}</h3>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Özəl sifariş yarat</button>
        </div>
      </div>
    </section>
  )
}
