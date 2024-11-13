'use client'

import * as React from 'react'
import { updatePrimitiveState } from '~ek/utils'

interface PaginationProps {
  totalPages: number
}

const paginationStyles: Readonly<TwClasses> = {
  wrapper: 'py-4 flex justify-center items-center mb-6 laptop:mb-15',
  pagination: 'flex gap-x-6',
  page: (isActive: unknown) =>
    `w-[26px] h-[26px] flex items-center justify-center rounded-full text-sm leading-[22px] font-medium ${(isActive as boolean) ? 'bg-gray-1 text-white' : 'text-gray-5'}`,
}
const styles = paginationStyles as Readonly<StyleRecord>
const getPageStyles = paginationStyles.page as StyleGetter

export function Pagination({
  totalPages,
}: Readonly<PaginationProps>): React.ReactElement {
  const [activePage, setActivePage] = React.useState<number>(1)

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
              onClick={() => updatePrimitiveState(page, setActivePage)}
            >
              {page}
            </li>
          ))}
      </ul>
    </div>
  )
}
