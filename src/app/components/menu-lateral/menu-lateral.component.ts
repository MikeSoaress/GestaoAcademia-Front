import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-lateral',
    templateUrl: './menu-lateral.component.html',
    styleUrls: ['./menu-lateral.component.css'],
    standalone: true
})
export class MenuLateralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  alternaSubMenu(id: string): void {
    var container_menu = document.getElementById(id);
    var elemento_menu = container_menu?.querySelector('[name="menu"]');
    var elemento_submenu = container_menu?.querySelector('[name="submenu"]');
    var icone_seta = container_menu?.querySelector('[name="icone_menu"]');

    var menu_ativo: boolean = elemento_submenu?.classList.contains('sub-menu-on') ? true : false;

    menu_ativo ? desabilitarSubMenu() : habilitarSubMenu();

    function habilitarSubMenu() {
      elemento_submenu?.classList.add('sub-menu-on');
      elemento_menu?.classList.add('item-menu-colapse-on');
      icone_seta?.classList.add('icone-menu-aberto');
    }

    function desabilitarSubMenu() {
      elemento_submenu?.classList.remove('sub-menu-on');
      elemento_menu?.classList.remove('item-menu-colapse-on');
      icone_seta?.classList.remove('icone-menu-aberto');
    }
  }

  alternaMenu(): void {
    var elementos_menu = document.getElementById('menu-ocultavel');
    var base_menu = document.getElementById('container-menu');
    var menu_ativo: boolean = elementos_menu?.classList.contains('ocultar') ? false : true;

    menu_ativo ? desabilitarMenu() : habilitarMenu();

    function habilitarMenu() {
      base_menu?.classList.add('menu-on');
      base_menu?.classList.remove('menu-off');
      setTimeout(() => {
        elementos_menu?.classList.remove('ocultar');
      }, 50);
    }

    function desabilitarMenu() {
      base_menu?.classList.remove('menu-on');
      base_menu?.classList.add('menu-off');
      elementos_menu?.classList.add('ocultar');
    }
  }

  btnSairClick() {
    this.router.navigate(['/login']);
  }
}


