'use client'

import * as React from 'react'
import { Button, Icon, NavLink } from '~ek/components'
import { useScreenSize } from '~ek/hooks'
import type { NavLinkEntry } from '~ek/types'
import { WIDE_SCREEN_HEADER_BREAKPOINT } from '~ek/utils'

interface DropdownProps {
  label: string
  nestedLinks: NavLinkEntry['nestedLinks']
}

const dropdownStyles: Readonly<TwClasses> = {
  dropdown: 'desktop:relative desktop:h-full',
  dropdownButton:
    'w-full desktop:w-auto desktop:h-full flex justify-between desktop:justify-center items-center text-base desktop:text-sm font-normal desktop:font-medium text-white',
  dropdownIcon: (isVisible: unknown) =>
    `transition-transform duration-300 ${(isVisible as boolean) ? 'rotate-0' : 'rotate-180'}`,
  dropdownCompactIcon: 'w-6 h-6',
  dropdownWideIcon: 'w-5 h-5',
  dropdownContent: (isVisible: unknown) =>
    `bg-gray-1 desktop:absolute desktop:top-full desktop:right-0 transition-all duration-300 origin-top ${(isVisible as boolean) ? 'opacity-100 max-h-[1000px] mt-2 desktop:mt-0' : 'opacity-0 max-h-0'}`,
  nestedItem: 'h-12 mb-0 px-6 flex items-center',
  nestedLink: 'text-base font-normal text-white desktop:text-nowrap',
}
const styles = dropdownStyles as Readonly<StyleRecord>
const getDropdownIconStyles: StyleGetter =
  dropdownStyles.dropdownIcon as StyleGetter
const getDropdownContentStyles: StyleGetter =
  dropdownStyles.dropdownContent as StyleGetter

export function Dropdown({
  label,
  nestedLinks,
}: Readonly<DropdownProps>): React.ReactElement {
  const { width } = useScreenSize()
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const [dropdownHeight, setDropdownHeight] = React.useState<number>(0)
  const dropdownRef = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight)
    }
  }, [isVisible])

  const handleDropdownVisibility = (shouldBeVisible: boolean): void =>
    setIsVisible(shouldBeVisible)

  return (
    <div className={styles.dropdown}>
      <Button
        classes={styles.dropdownButton}
        onClick={() => handleDropdownVisibility(!isVisible)}
      >
        <span>{label}</span>
        <Icon
          variant={
            width < WIDE_SCREEN_HEADER_BREAKPOINT
              ? 'dropdown-compact'
              : 'dropdown-wide'
          }
          sizes={
            width < WIDE_SCREEN_HEADER_BREAKPOINT
              ? styles.dropdownCompactIcon
              : styles.dropdownWideIcon
          }
          classes={getDropdownIconStyles(isVisible)}
        />
      </Button>

      <ul
        className={getDropdownContentStyles(isVisible)}
        style={{
          maxHeight: isVisible ? `${dropdownHeight}px` : '0px',
        }}
        ref={dropdownRef}
      >
        {nestedLinks?.map(link => (
          <li
            key={link.href}
            className={styles.nestedItem}
          >
            <NavLink
              href={link.href as string}
              classes={styles.nestedLink}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
