import {AppSideBarItem} from "./models/app-side-bar-item";

export const adminMenu: AppSideBarItem[] = [
  {
    name: 'Início',
    icon: 'fa-house',
    path: '/admin'
  },
  {
    name: 'Biblioteca',
    icon: 'fa-books',
    //path: '/admin/library',
    subMenu: [
      {
        name: 'Libros',
        icon: 'fa-books',
        path: '/admin/library',
      },
      {
        name: 'Agregar',
        icon: 'fa-books',
        path: '/admin/library/add',
      }
    ]
  },
  {
    name: 'Actividades',
    icon: 'fa-files',
    path: '/admin/activities'
  },
  {
    name: 'Calificaciones',
    icon: 'fa-hundred-points',
    path: '/admin/rating'
  },
]

export const studentMenu: AppSideBarItem[] = [
  {
    name: 'Início',
    icon: 'fa-house',
    path: '/admin'
  },
  {
    name: 'Biblioteca',
    icon: 'fa-books',
    path: '/admin/library',
  },
  {
    name: 'Actividades',
    icon: 'fa-files',
    path: '/admin/activities'
  },
  {
    name: 'Calificaciones',
    icon: 'fa-hundred-points',
    path: '/admin/rating'
  },
]
