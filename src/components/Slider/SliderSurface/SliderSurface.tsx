import React from 'react'
import { sliderSurfaceStyles } from '@embakitchen/components/Slider/SliderSurface/SliderSurface.style'

export const Gallery: React.FC = () => {
  const styles: Dictionary<string> =
    sliderSurfaceStyles.gallery as Dictionary<string>

  return (
    <div className={styles.wrapper}>
      <strong className={styles.tag}>Ən çox satılan</strong>
      <h5 className={styles.title}>Adel Ral</h5>
    </div>
  )
}
