import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';
import { MicontenidoComponent } from '../components/micontenido/micontenido.component';
import { AgregarComponent } from '../components/agregar/agregar.component';
import { EditarComponent } from '../components/editar/editar.component';
import { EliminarComponent } from '../components/eliminar/eliminar.component';
import { VermasComponent } from '../components/vermas/vermas.component';
import { NoticiasmasbuscadasComponent } from '../components/noticiasmasbuscadas/noticiasmasbuscadas.component';
import { RecomendacionesComponent } from '../components/recomendaciones/recomendaciones.component';
import { MenuComponent } from '../components/menu/menu.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'usuario', component: UsuarioComponent, },
    { path: 'usuario/menu', component: MenuComponent, },
    { path: 'usuario/micontenido', component: MicontenidoComponent, },
    { path: 'usuario/micontenido/recomendaciones', component: RecomendacionesComponent,},
    { path: 'usuario/micontenido/agregar', component: AgregarComponent,},
    { path: 'usuario/micontenido/editar', component: EditarComponent,},
    { path: 'usuario/micontenido/eliminar', component: EliminarComponent ,},
    { path: 'usuario/home', component: HomeComponent ,},
    { path: 'micontenido/usuario', component: UsuarioComponent ,},
    { path: 'noticiasmasbuscadas/recomendaciones', component: RecomendacionesComponent , },
    { path: 'recomendaciones/noticiasmasbuscadas', component: NoticiasmasbuscadasComponent ,},
    {path:'usuario/noticiasmasbuscadas',component:NoticiasmasbuscadasComponent,},
    {path:'usuario/recomendaciones',component:RecomendacionesComponent},
    {path:'usuario/vermas',component:VermasComponent},
    {path:'vermas',component:VermasComponent},
    {path:'noticiasmasbuscadas',component:NoticiasmasbuscadasComponent},
    {path:'recomendaciones',component:RecomendacionesComponent},
    {path:'menu',component:MenuComponent},
    { path: 'inicio', component: HomeComponent },
    { path: 'inicio/noticiasmasbuscadas', component: NoticiasmasbuscadasComponent },
    { path: 'inicio/recomendaciones', component: RecomendacionesComponent },
    { path: 'inicio/menu', component: MenuComponent },
    { path: 'inicio/vermas', component: VermasComponent },
    { path: 'micontenido', component: MicontenidoComponent },


];
