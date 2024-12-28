import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-adicionar-usuario',
    templateUrl: './adicionar-usuario.component.html',
    styleUrls: ['./adicionar-usuario.component.css'],
    standalone: false
})
export class AdicionarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public alternaColapse(id_collapse: string): void {
    var bloco_selecionado = document.getElementById(id_collapse);
    var item_colapse = bloco_selecionado?.getElementsByClassName('grupo-itens')[0];
    var icone_colapse = bloco_selecionado?.getElementsByClassName('icone-seta')[0];
    var colapse_ativo: boolean = item_colapse?.classList.contains('ocultar-colapse') ? true : false;

    colapse_ativo ? habilitarColapse() : desabilitaColapse();

    function habilitarColapse() {
      item_colapse?.classList.remove('ocultar-colapse');
      icone_colapse?.classList.add('icone-seta-ativa');
    }

    function desabilitaColapse() {
      item_colapse?.classList.add('ocultar-colapse');
      icone_colapse?.classList.remove('icone-seta-ativa');
    }
  }

}
