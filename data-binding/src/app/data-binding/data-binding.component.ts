import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://www.google.com/logos/doodles/2018/clarice-lispectors-98th-birthday-5991645920100352-l.png';
  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }
  
  botaoClicado(){
    alert("Botão Clicado");
  }
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement> evento.target).value);
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  getCurtirCurso(){
    return true;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
     this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
