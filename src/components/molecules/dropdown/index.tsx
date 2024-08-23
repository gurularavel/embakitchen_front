'use client'

import * as React from 'react'
import { Button, Icon, NavLink } from '~ek/components'
import { NavLinkEntry } from '~ek/types'

interface DropdownProps {
  text: string
  items: NavLinkEntry['items']
}

const dropdownStyles: Readonly<TailwindStyle> = {
  dropdown: 'overflow-hidden',
  dropdownTogglerButton:
    'w-full flex justify-between items-center text-base font-normal text-white',
  dropdownTogglerIcon: (isDropdownVisible: unknown) =>
    `transition-transform duration-300 ${(isDropdownVisible as boolean) ? 'rotate-180' : 'rotate-0'}`,
  dropdownContent: (isDropdownVisible: unknown) =>
    `mt-2 ${(isDropdownVisible as boolean) ? 'static translate-y-0 opacity-100 transition-all duration-300' : 'absolute translate-y-8 opacity-0'}`,
  dropdownItem: 'px-6 h-12 mb-0 flex items-center',
  dropdownLink: 'text-base font-normal text-white',
}
const styles: Readonly<StyleRecord> = dropdownStyles as StyleRecord
const getDropdownTogglerIconStyles: StyleGetter =
  dropdownStyles.dropdownTogglerIcon as StyleGetter
const getDropdownContentStyles: StyleGetter =
  dropdownStyles.dropdownContent as StyleGetter

export function Dropdown({
  text,
  items,
}: Readonly<DropdownProps>): ReactComponent {
  const [isDropdownVisible, setIsDropdownVisible] =
    React.useState<boolean>(false)

  const dropdownVisibilityToggler = (): void =>
    setIsDropdownVisible(!isDropdownVisible)

  return (
    <div className={styles.dropdown}>
      <Button
        onClick={dropdownVisibilityToggler}
        classes={styles.dropdownTogglerButton}
      >
        <span>{text}</span>
        <Icon
          variant='dropdown-mobile'
          classes={getDropdownTogglerIconStyles(isDropdownVisible)}
        />
      </Button>
      <ul className={getDropdownContentStyles(isDropdownVisible)}>
        {items?.map(item => (
          <li
            key={`${item.href}${item.text}`}
            className={styles.dropdownItem}
          >
            <NavLink
              href={item.href as string}
              classes={styles.dropdownLink}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
