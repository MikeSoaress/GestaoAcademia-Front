import { Component, OnInit, HostListener  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DeviceService } from '../../services/device.service';
import { AvisoComponent } from '../../components/aviso/aviso.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [AvisoComponent, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  textoDeAviso: string = '';
  acessoMobile: boolean = false;

  constructor(private router: Router, private authService: AuthService, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.acessoMobile = this.deviceService.isMobile();
    this.authService.logout();
  }

  @HostListener('window:resize')
  onResize() {
    this.acessoMobile = this.deviceService.isMobile();
  }

  login() {
    if (this.camposValidos()) {
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          if (this.authService.isAuthenticated())
            this.router.navigate([this.authService.urlInicial]);

          else
            this.textoDeAviso = this.authService.avisoCredencialIncorreta;
        },
        (error) => {
          this.textoDeAviso = 'Erro ao realizar login. Tente novamente.';
          console.error('Erro no login:', error);
        }
      );
    }

    else {
      this.textoDeAviso = this.authService.avisoCamposInvalidos;
    }
  }

  ocultarAviso() {
    this.textoDeAviso = '';
  }

  camposValidos() {
    return this.username != '' && this.password != '' ? true : false;
  }


}
