interface DropdownItem {
  id: number
  name: string
  active?: boolean
}

export interface NavbarItemProps {
  name: string
  active?: boolean
  dropdown?: boolean
  items?: DropdownItem[]
}

export interface NavItem {
  id: number
  name: string
  dropdown?: boolean
  items?: DropdownItem[]
  active?: boolean
}
