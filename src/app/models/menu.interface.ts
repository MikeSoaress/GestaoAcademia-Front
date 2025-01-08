import { Submenu } from "./subMenu.interface";
export interface Menu {
    id_menu: number;
    legenda_menu: string;
    url_menu: string;
    submenus: Submenu[];
  }