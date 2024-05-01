export interface NavbarProps {}
export interface NavbarMobileProps {}

export interface NavbarItemProps {
  name: string
  active?: boolean
  dropdown?: boolean
  items?: DropDownItem[]
}

interface DropDownItem {
  id: number
  name: string
  active?: boolean
}

export interface NavItem {
  id: number
  name: string
  dropdown?: boolean
  items?: DropDownItem[]
  active?: boolean
}
