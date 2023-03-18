export interface AppSideBarItem {
  name: string
  icon: string
  path?: string
  subMenu?: AppSideBarItem[]
}
