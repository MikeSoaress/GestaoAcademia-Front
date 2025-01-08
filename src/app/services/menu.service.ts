import { AuthService, } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Menu } from "../models/menu.interface";


@Injectable({
  providedIn: 'root', // Isso torna o serviço globalmente disponível
})

export class MenuService {
  private apiUrl = 'https://localhost:7218/api';

  private menus: Menu[] = [];
  
  constructor(private http: HttpClient, private authService: AuthService) {}
  
  loadMenus() {
    const token = this.authService.getToken();
    return this.http.get<Menu[]>(`${this.apiUrl}/menu`, { headers: { Authorization: `Bearer ${token}` } })
      .subscribe(data => {
        localStorage.setItem('menus', JSON.stringify(data)); 
      });
  }

  getMenus(): Menu[] {
    const storedMenus = localStorage.getItem('menus');
    
    if (storedMenus) {
      this.menus = JSON.parse(storedMenus) as Menu[];
    } 
  
    return this.menus;
  }
}
