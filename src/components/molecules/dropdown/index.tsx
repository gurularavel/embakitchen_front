'use client'

import * as React from 'react'
import { Button, Icon, MenuItem } from '@ek/components'

interface DropdownItem {
  text: string
  href: string
}

interface DropdownProps {
  text: string
  items: DropdownItem[]
}

const dropdownStyles: Readonly<TailwindStyle> = {
  dropdown: '',
  dropdownToggler: (isOpen: unknown) =>
    `w-full mb-2 flex justify-between items-center text-base font-normal leading-6 text-white [&>img]:transition-transform [&>img]:duration-300 ${(isOpen as boolean) ? '[&>img]:rotate-180' : '[&>img]:rotate-0'}`,
  dropdownContent: (isOpen: unknown) =>
    `${(isOpen as boolean) ? 'block' : 'hidden'}`,
  dropdownItem: 'px-6 h-12 mb-0 flex items-center',
}
const styles: Readonly<StyleRecord> = dropdownStyles as StyleRecord
const getDropdownTogglerStyles: StyleGetter =
  dropdownStyles.dropdownToggler as StyleGetter
const getDropdownContentStyles: StyleGetter =
  dropdownStyles.dropdownContent as StyleGetter

export function Dropdown({
  text,
  items,
}: Readonly<DropdownProps>): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleIsOpen = (): void => setIsOpen(!isOpen)

  return (
    <div className={styles.dropdown}>
      <Button
        onClick={toggleIsOpen}
        classes={getDropdownTogglerStyles(isOpen)}
      >
        <span>{text}</span>
        <Icon variant='down-chevron-1' />
      </Button>

      <div className={getDropdownContentStyles(isOpen)}>
        {items?.map(item => (
          <MenuItem
            href={item.href}
            key={item.href}
            classes={styles.dropdownItem}
          >
            {item.text}
          </MenuItem>
        ))}
      </div>
    </div>
  )
}
