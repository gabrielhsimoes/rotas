import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guard/iform-candeactivate';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

aluno: any = {};
inscricao!: Subscription;
private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(){
    console.log('mudou')
    this.formMudou = true;
  }

  podeMudarRota(){

    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
