'use client'

import { SliderOption } from '~ek/types'

// import React from 'react'
// import { SliderVariant } from '@embakitchen/components'

interface SliderProps {
  variant: SliderOption
}

// const sliders: Record<SliderOption, ReactComponent> = {
//   main: <SliderVariant.Main />,
//   gallery: <SliderVariant.Gallery />,
//   partners: <SliderVariant.Partners />,
// }

export function Slider({ variant }: Readonly<SliderProps>): ReactComponent {
  // return sliders[variant]
  return <div></div>
}
