'use client'

import * as React from 'react'

interface PaginationProps {
  totalPages: number
}

const paginationStyles: Readonly<TwClasses> = {
  wrapper: 'flex justify-center items-center',
  pagination: 'flex gap-x-8',
  page: (isActive: unknown) =>
    `h-[26px] ${(isActive as boolean) ? 'w-[26px] flex items-center justify-center rounded-full bg-gray-1 text-white' : ''}`,
}
const styles = paginationStyles as Readonly<StyleRecord>
const getPageStyles = paginationStyles.page as StyleGetter

export function Pagination({
  totalPages,
}: Readonly<PaginationProps>): React.ReactElement {
  const [activePage, setActivePage] = React.useState<number>(1)
  const selectPage = React.useCallback(
    (page: number): void => setActivePage(page),
    [],
  )

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pagination}>
        {Array(totalPages)
          .fill(0)
          .map((_, i: number) => i + 1)
          .map(page => (
            <li
              key={page}
              className={getPageStyles(page === activePage)}
              onClick={() => selectPage(page)}
            >
              {page}
            </li>
          ))}
      </ul>
    </div>
  )
}
