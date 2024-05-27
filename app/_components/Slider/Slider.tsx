'use client'

import React from 'react'
import { SliderVariants } from '@embakitchen/_components/Slider/SliderVariants'
import type { SliderVariant } from '@embakitchen/_types'

interface SliderProps {
  variant: SliderVariant
}

const sliders: Record<string, React.ReactNode> = {
  main: <SliderVariants.MainSlider />,
}

export const Slider: React.FC<SliderProps> = ({ variant }) => sliders[variant]
