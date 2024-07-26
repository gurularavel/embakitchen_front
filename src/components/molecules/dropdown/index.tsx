'use client'

import React, { useState } from 'react'
import { Button, Icon } from '@ek/components'
import { dropdownStyles } from '@ek/components/molecules/styles'

const styles: StyleRecord = dropdownStyles as StyleRecord
const getDropdownTogglerStyles: StyleGetter =
  dropdownStyles.dropdownToggler as StyleGetter
const getDropdownContentStyles: StyleGetter =
  dropdownStyles.dropdownContent as StyleGetter

interface DropdownItem {
  text: string
  href: string
}

interface DropdownProps {
  text: string
  items: DropdownItem[]
}

export function Dropdown({ text }: DropdownProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleIsOpen = (): void => setIsOpen(!isOpen)

  return (
    <div className={styles.container}>
      <Button
        onClick={toggleIsOpen}
        twStyles={getDropdownTogglerStyles(isOpen)}
      >
        <span>{text}</span>
        <Icon variant='down-chevron-1' />
      </Button>

      <div className={getDropdownContentStyles(isOpen)}>
        <h1>Dropdown content</h1>
      </div>
    </div>
  )
}
