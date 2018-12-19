import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  //"passar eventos pra frente"
  @Output() mudouValor = new EventEmitter();
  
  adicionar(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  
  diminuir(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }
  constructor() { }

  ngOnInit() {
  }

}
