import { Component } from '@angular/core';

@Component({
  selector: 'ea-oferta-conta',
  templateUrl: './oferta-conta.component.html',
  styleUrls: ['./oferta-conta.component.scss']
})
export class OfertaContaComponent {

  btns = true;
  info = false;
  study_plan = false;

  see_info() {
    this.btns = false;
    this.info = true;
    this.study_plan = false;
  }

  see_study_plan() {
    this.btns = false;
    this.info = false;
    this.study_plan = true;
  }

  back() {
    this.btns = true;
    this.info = false;
    this.study_plan = false;
  }

}
