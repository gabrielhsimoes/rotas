import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from '../alunos.component';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';
import { AlunosRoutingModule } from '../alunos.routing.module';
import { AlunosService } from '../alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from 'src/app/guard/alunos-deactivate.guard';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';



@NgModule({
  declarations: [
    AlunosComponent, 
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService, 
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
