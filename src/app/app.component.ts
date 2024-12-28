import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido de "styleUrl" para "styleUrls"
})

export class AppComponent {
  constructor(private router: Router,  private authService: AuthService) { }
  title = 'cozinha';
  currentUrl: string = '';

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
      this.router.navigate(['/login']);

    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url; // URL atual
    });
  }
}




