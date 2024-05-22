import { Slider, Statistics } from '@embakitchen/_components'
import type { StatisticsData } from '@embakitchen/_types'

export const statisticsData: StatisticsData[] = [
  {
    id: 1,
    number: 30,
    name: 'Çeşid',
  },
  {
    id: 2,
    number: 20,
    name: 'Material',
  },
  {
    id: 3,
    number: 100,
    name: 'Müştəri',
  },
  {
    id: 4,
    number: 200,
    name: 'Layihə',
  },
]

export default function Home() {
  return (
    <main>
      <Slider type='main' />
      <Statistics statisticsData={statisticsData} />
    </main>
  )
}
