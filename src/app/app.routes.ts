import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AdicionarUsuarioComponent } from './pages/adicionar-usuario/adicionar-usuario.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent
    },

    { 
        path: 'usuario', 
        component:  UsuarioComponent,
        canActivate: [AuthGuard], 
        data: { roles: ['2'] }, 
    },
    { 
        path: 'adicionar-usuario', 
        component:  AdicionarUsuarioComponent,
        canActivate: [AuthGuard], 
        data: { roles: ['1'] }, 
    }
];
