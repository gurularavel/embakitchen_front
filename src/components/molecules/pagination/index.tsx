'use client'

import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Pagination as AntPagination } from 'antd'
import { twMerge } from 'tailwind-merge'
import { useLocale } from 'next-intl'
import { usePathname } from '~ek/i18n/routing'

interface PaginationProps {
  total: number
  hidePaginationNav?: boolean
}

const paginationStyles: Readonly<TwClasses> = {
  wrapper: 'py-4 flex justify-center items-center mb-6 laptop:mb-15',
  pagination: 'flex items-center',
  paginationNav:
    '[&_.ant-pagination-prev]:!hidden [&_.ant-pagination-next]:!hidden',
  paginationItem:
    '[&_.ant-pagination-item]:!min-w-[26px] [&_.ant-pagination-item]:!w-[26px] [&_.ant-pagination-item]:!h-[26px] [&_.ant-pagination-item]:!text-sm [&_.ant-pagination-item]:[&]:text-gray-5 [&_.ant-pagination-item]:!leading-[22px] [&_.ant-pagination-item]:!font-medium [&_.ant-pagination-item]:!rounded-full [&_.ant-pagination-item-active]:!bg-gray-1 [&_.ant-pagination-item-active]:!border-0',
  paginationLink:
    '[&_.ant-pagination-item>a]:!w-full [&_.ant-pagination-item>a]:!h-full [&_.ant-pagination-item>a]:!text-inherit [&_.ant-pagination-item>a]:!flex [&_.ant-pagination-item>a]:!items-center [&_.ant-pagination-item>a]:!justify-center',
  paginationLinkActive: '[&_.ant-pagination-item-active]:[&&]:text-white',
}
const styles = paginationStyles as Readonly<StyleRecord>

export function Pagination({
  total,
  hidePaginationNav = true,
}: Readonly<PaginationProps>): React.ReactElement {
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentPage = React.useMemo(
    () => +(searchParams.get('page') ?? 1),
    [searchParams],
  )

  const handlePageChange = React.useCallback(
    (page: number) => {
      if (page === currentPage) return

      const params = new URLSearchParams(searchParams.toString())
      params.set('page', page.toString())

      router.push(`/${locale}${pathname}?${params.toString()}`)
    },
    [locale, pathname, router, currentPage, searchParams],
  )

  return (
    <div className={styles.wrapper}>
      <AntPagination
        total={total}
        pageSize={3}
        defaultCurrent={currentPage}
        showSizeChanger={false}
        hideOnSinglePage={true}
        className={twMerge(
          styles.pagination,
          hidePaginationNav ? styles.paginationNav : '',
          styles.paginationItem,
          styles.paginationLink,
          styles.paginationLinkActive,
        )}
        onChange={handlePageChange}
      />
    </div>
  )
}
