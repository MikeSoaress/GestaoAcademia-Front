import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AdicionarUsuarioComponent } from './pages/adicionar-usuario/adicionar-usuario.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'usuario', component:  UsuarioComponent},
    { path: 'adicionar-usuario', component:  AdicionarUsuarioComponent}
];
