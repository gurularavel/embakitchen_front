export const statisticsItemStyles: TailwindStyle = {
  container: (row: unknown) =>
    `w-1/2 mobile:w-auto compact:flex compact:justify-center border-solid border-light-gray ${
      (row as number) % 2 === 0
        ? 'border-r mobile:border-r-0 pr-5 compact:pr-0'
        : 'pl-5 compact:pl-0'
    }`,
  wrapper: 'flex flex-col',
  quantity:
    'text-3xl tablet:text-4xl leading-10 tablet:leading-14 text-primary-3 font-bold mb-1.25',
  title:
    'text-base tablet:text-xl leading-6 tablet:leading-7 text-semi-dark font-medium',
  line: 'hidden mobile:block w-px bg-light-gray',
}
