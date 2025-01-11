import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css'],
  standalone: false
})
export class ConfirmacaoComponent implements OnInit {

  constructor() { }

  @Input() mensagem: string = '';
  ngOnInit(): void {
  }

}
