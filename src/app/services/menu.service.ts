import { AuthService, } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root', // Isso torna o serviço globalmente disponível
})

export class MenuService {
  private apiUrl = 'https://localhost:7218/api';

  private menus: any[] = [];
  
  constructor(private http: HttpClient, private authService: AuthService) {}
  
  loadMenus() {
    const token = this.authService.getToken();
    return this.http.get<any[]>(`${this.apiUrl}/menu`, { headers: { Authorization: `Bearer ${token}` } })
      .subscribe(data => {
        this.menus = data;
      });
  }

  getMenus() {
    return this.menus;
  }
}
