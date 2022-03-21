import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AlunosGuard } from "./guard/alunos.guard";
import { AuthGuard } from "./guard/auth.guard";
import { CursosGuard } from "./guard/cursos.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
    },
    { path: 'alunos', 
    loadChildren: () => import('./alunos/alunos/alunos.module').then(aluno => aluno.AlunosModule),
    canActivate: [AuthGuard]//,
    // canActivateChild: [AlunosGuard]
    },
    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    // {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    { path: '', component: HomeComponent,
    canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}