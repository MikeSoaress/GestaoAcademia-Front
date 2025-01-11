import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./menu-lateral.component.css'],
  standalone: true
})
export class MenuLateralComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) { }
  arrayMenu: Menu[] = [];

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.arrayMenu = this.menuService.getMenus();
  }

  alternaSubMenu(id: string): void {
    var container = document.getElementById(id);
    var menu = container?.querySelector('[name="menu"]');
    var submenu = container?.querySelector('[name="submenu"]');
    var iconeSeta = container?.querySelector('[name="icone_menu"]');

    var menuAtivo: boolean = submenu?.classList.contains('sub-menu-on') ? true : false;

    menuAtivo ? desabilitarSubMenu() : habilitarSubMenu();

    function habilitarSubMenu() {
      submenu?.classList.add('sub-menu-on');
      menu?.classList.add('item-menu-colapse-on');
      iconeSeta?.classList.add('icone-menu-aberto');
    }

    function desabilitarSubMenu() {
      submenu?.classList.remove('sub-menu-on');
      menu?.classList.remove('item-menu-colapse-on');
      iconeSeta?.classList.remove('icone-menu-aberto');
    }
  }

  alternaMenu(): void {
    var elementos_menu = document.getElementById('menu-ocultavel');
    var base_menu = document.getElementById('container-menu');
    var menuAtivo: boolean = elementos_menu?.classList.contains('ocultar') ? false : true;

    menuAtivo ? desabilitarMenu() : habilitarMenu();

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


