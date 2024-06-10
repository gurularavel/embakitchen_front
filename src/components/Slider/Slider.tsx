'use client'

import React from 'react'
import { SliderVariant } from '@embakitchen/components'
import type { SliderOption } from '@embakitchen/types'

const sliders: Record<string, React.ReactNode> = {
  main: <SliderVariant.MainSlider />,
  partners: <SliderVariant.PartnersSlider />,
}

interface SliderProps {
  variant: SliderOption
}

export const Slider: React.FC<SliderProps> = ({ variant }) => {
  return sliders[variant]
}
