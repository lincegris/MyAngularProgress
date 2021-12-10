import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-binding',
  templateUrl: './double-binding.component.html',
  styleUrls: ['./double-binding.component.css']
})
export class DoubleBindingComponent implements OnInit {

  nombre : any = "";
  mensaje: any = "Hola ";
  

  constructor() { }

  saludo(){
    alert(this.mensaje+" "+this.nombre );
  }

  resetear(){
    this.nombre="";
  }

  ngOnInit(): void {
  }

}
