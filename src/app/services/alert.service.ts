import {Injectable} from '@angular/core';
import Swal from 'sweetalert2'
import firebase from "firebase/compat";
import functions = firebase.functions;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  success(title: string, description?: string) {
    Swal.fire(
      title,
      description,
      'success'
    )
  }

  error(title: string, description?: string) {
    Swal.fire(
      title,
      description,
      "error"
    )
  }

  warning(title: string, description?: string) {
    Swal.fire(
      title,
      description,
      "warning"
    )
  }

  confirmDelete(callback: Function, callbackCancel: Function) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta accion no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Continuar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await callback();
        Swal.fire(
          'Eliminado',
          'Se ha eliminado correctamente',
          'success'
        )
      } else {
        callbackCancel()
      }
    })
  }
}
