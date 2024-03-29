export interface NavbarProps {}

export interface NavbarItemProps {
  name: string
  active?: boolean
  dropdown?: boolean
  items?: DropDownItem[]
}

interface DropDownItem {
  id: number
  name: string
}

export interface NavItem {
  id: number
  name: string
  dropdown?: boolean
  items?: DropDownItem[]
  active?: boolean
}
