import type { SliderVariant } from '~ek/types'

interface SliderProps {
  variant: SliderVariant
}

const sliders: Readonly<Record<SliderVariant, React.ReactElement>> = {
  main: <div>Main Slider</div>,
  gallery: <div>Gallery Slider</div>,
  partners: <div>Partners Slider</div>,
}

export function Slider({ variant }: Readonly<SliderProps>): React.ReactElement {
  return sliders[variant]
}

// 'use client'
// import React from 'react'
// const sliders: Record<SliderOption, ReactComponent> = {
//   main: <SliderVariant.Main />,
//   gallery: <SliderVariant.Gallery />,
//   partners: <SliderVariant.Partners />,
// }
