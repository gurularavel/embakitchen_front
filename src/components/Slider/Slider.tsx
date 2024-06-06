'use client'

import React from 'react'
import { SliderVariant } from '@embakitchen/components'
import type { SliderOption } from '@embakitchen/types'

const sliders: Record<string, React.ReactNode> = {
  main: <SliderVariant.MainSlider />,
}

interface SliderProps {
  variant: SliderOption
}

export const Slider: React.FC<SliderProps> = ({ variant }) => {
  return <div className='mb-25'>{sliders[variant]}</div>
}
