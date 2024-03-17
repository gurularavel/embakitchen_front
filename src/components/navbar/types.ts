export interface NavbarProps {}

export interface NavbarItemProps {
  item: string
  active?: boolean
  dropdown?: boolean
}

export interface NavItem {
  id: number
  name: string
  dropdown?: boolean
  active?: boolean
}
