import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css'],
  standalone: true
})
export class AvisoComponent implements OnInit {
  constructor() { }
  @Input() mensagem: string = '';
  @Output() actionBtnOk = new EventEmitter<void>();

  ngOnInit(): void {
  }

  btnOkClick() {
    this.actionBtnOk.emit();
  }

}  
