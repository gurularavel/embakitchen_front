'use client'

import * as React from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Button, Icon, Input, NavLink } from '~ek/components'
import { useClickOutside, useInputFocus } from '~ek/hooks'
import { getSearchResult } from '~ek/services'
import type { Language, SearchResultEntry } from '~ek/types'
import { PER_PAGE, transformToUiData, updatePrimitiveState } from '~ek/utils'

const searchStyles: Readonly<TwClasses> = {
  search: 'w-auto h-full',
  searchButton: 'w-auto h-full flex items-center',
  searchContainer: (isVisible: unknown) =>
    `search-box even:h-11 bg-white shadow-sm shadow-supplementary-1/20 px-3.5 absolute left-0 right-0 z-50 border border-solid border-gray-4 rounded-lg flex items-center gap-x-2 transition-all duration-300 ease-in-out ${(isVisible as boolean) ? 'top-14 laptop:top-24 opacity-100 translate-y-0' : '-top-full opacity-0 -translate-y-full'}`,
  searchInputIcon: 'w-6 h-6',
  input:
    'w-full h-full text-sm placeholder:text-sm font-normal placeholder:font-normal text-tertiary-1 placeholder:text-tertiary-1',
  resultBox: (isVisible: unknown) =>
    `w-full text-sm bg-white shadow-sm shadow-supplementary-1/20 absolute left-0 right-0 z-50 border border-solid border-gray-4 rounded-lg flex items-center gap-x-2 ${(isVisible as boolean) ? 'top-25 laptop:top-36' : '-top-full opacity-0 -translate-y-full'}`,
  searchResult: 'serach-result w-full',
  searchImage: 'w-15 h-12 object-cover object-center',
  resultProductWrapper:
    'w-full flex items-center gap-x-2.5 px-4 py-2 cursor-pointer hover:bg-primary-9 hover:text-primary-1',
  productTitle: '',
  resultFooter: 'flex justify-between px-4 py-2',
  notFound: 'p-3 text-primary-1 font-normal',
  total: 'text-gray-3',
  searchLink: 'text-primary-1 font-medium',
}
const styles = searchStyles as Readonly<StyleRecord>
const getSearchContainerStyles = searchStyles.searchContainer as StyleGetter
const getResultBoxStyles = searchStyles.resultBox as StyleGetter

export function Search(): React.ReactElement {
  const locale = useLocale()
  const t = useTranslations()
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const [searchResult, setSearchResult] = React.useState<SearchResultEntry>(
    {} as SearchResultEntry,
  )
  const [inputValue, setInputValue] = React.useState<string>('')
  const searchInputRef = useInputFocus({
    isVisible,
    options: {
      clearValue: true,
    },
  })

  const onInputChange = async (search: string) => {
    setInputValue(search)
    const searchResult = await getSearchResult({ search, perPage: PER_PAGE })
    const uiData = transformToUiData(
      searchResult,
      locale as Language,
    ) as SearchResultEntry
    setSearchResult(uiData)
  }

  const closeSearch = () => {
    setIsVisible(false)
    setSearchResult({} as SearchResultEntry)
  }
  useClickOutside('.search-box', closeSearch, isVisible)

  return (
    <div className={styles.search}>
      <Button
        onClick={() => updatePrimitiveState(!isVisible, setIsVisible)}
        classes={styles.searchButton}
      >
        <Icon
          variant='search-1'
          sizes='w-6 h-6'
        />
      </Button>

      <div className={getSearchContainerStyles(isVisible)}>
        <Icon
          variant='search-dark'
          sizes='w-6 h-6'
          classes={styles.searchInputIcon}
        />

        <Input
          type='search'
          placeholder={t('placeholder.search')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(e.target.value)
          }
          classes={styles.input}
          ref={searchInputRef}
        />
      </div>
      <div className={getResultBoxStyles(isVisible && searchResult?.data)}>
        {!!searchResult?.data?.length ? (
          <div className={styles.searchResult}>
            {searchResult.data.map(product => {
              return (
                <div
                  key={product.id}
                  onClick={closeSearch}
                >
                  <NavLink
                    href={`/products/${product.category}/${product.slug}`}
                  >
                    <div className={styles.resultProductWrapper}>
                      <Image
                        src={product.bannerImage.original_url}
                        className={styles.searchImage}
                        alt={product.title}
                        width={60}
                        height={45}
                      />
                      <span className={styles.productTitle}>
                        {product.title}
                      </span>
                    </div>
                  </NavLink>
                </div>
              )
            })}
            {searchResult?.pagination.total && (
              <div className={styles.resultFooter}>
                <div className={styles.total}>
                  {t('search.total')} {searchResult?.pagination.total}
                </div>
                <NavLink
                  className={styles.searchLink}
                  href={`/search?search=${inputValue}`}
                >
                  {t('search.searchLink')}
                </NavLink>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.notFound}>{t('search.notFound')}</div>
        )}
      </div>
    </div>
  )
}
