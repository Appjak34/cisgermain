import {Component, Input} from '@angular/core';

@Component({
  selector: 'ea-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent {
  @Input() img_title! :string
  @Input() bg_img! :string

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
