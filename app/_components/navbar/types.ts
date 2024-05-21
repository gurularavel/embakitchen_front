interface DropdownItem {
  id: number
  name: string
  active?: boolean
}

export interface NavbarItemProps {
  name: string
  active?: boolean
  isDropdown?: boolean
  items?: DropdownItem[]
}

export interface NavItem {
  id: number
  name: string
  isDropdown?: boolean
  items?: DropdownItem[]
  active?: boolean
}
