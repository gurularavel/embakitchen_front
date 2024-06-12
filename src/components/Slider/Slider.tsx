'use client'

import React from 'react'
import { SliderVariant } from '@embakitchen/components'
import type { SliderOption } from '@embakitchen/types'

const sliders: Dictionary<React.ReactNode> = {
  main: <SliderVariant.Main />,
  gallery: <SliderVariant.Gallery />,
  partners: <SliderVariant.Partners />,
}

interface SliderProps {
  variant: SliderOption
}

export const Slider: React.FC<SliderProps> = ({ variant }) => {
  return sliders[variant]
}
