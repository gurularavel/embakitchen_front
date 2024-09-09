// import { STATISTICS_INTERVAL_LIMIT } from '@embakitchen/utils'

// export const updateStatisticsContainer = (container: HTMLElement) => {
//   const quantity: number = +container.dataset.quantity!
//   const quantityWrapper: HTMLElement = container.querySelector(
//     '.statistics-quantity',
//   ) as HTMLElement

//   const interval: ReturnType<typeof setInterval> = setInterval(() => {
//     if (+quantityWrapper.textContent! < quantity) {
//       quantityWrapper.textContent = (
//         +quantityWrapper.textContent! + 1
//       ).toString()
//     } else {
//       if (!quantityWrapper.textContent?.includes('+')) {
//         quantityWrapper.textContent += '+'
//       }
//       clearInterval(interval)
//     }
//   }, STATISTICS_INTERVAL_LIMIT / quantity)
// }
