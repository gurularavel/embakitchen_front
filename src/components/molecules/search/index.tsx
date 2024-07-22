import React from 'react'
import { Icon, Input } from '@ek/components/atoms'
import { searchStyles } from '@ek/components/molecules/search/search.style'

const styles: StyleRecord = searchStyles as StyleRecord
const getContainerStyles = searchStyles.container as (p: boolean) => string

interface SearchProps {
  isSearchShown: boolean
}

export function Search({ isSearchShown }: SearchProps): React.ReactElement {
  return (
    <div className={getContainerStyles(isSearchShown)}>
      <Icon variant='search-2' />
      <Input
        twStyles={styles.input}
        placeholder='Axtar'
      />
    </div>
  )
}
