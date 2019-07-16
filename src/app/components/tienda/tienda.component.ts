import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { fadeIn } from '../animation';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    fadeIn,
    trigger('marcar', [
        //states
        state('inactive', style({
          border: '5px solid #ccc'
        })),
        state('active', style({
          border: '5px solid yellow',
          background: 'red',
          borderRadius: '50px',
          transform: 'scale(1.2)'
        })),
        transition('inactive => active', animate('1s linear')),
        transition('active => inactive', animate('1s linear'))
    ])
  ]
})

export class TiendaComponent {
    public titulo;
    public nombreDelParque: string;
    public miParque;
    public status;

    constructor(){
      this.titulo = 'Esta se la tienda';
      this.status = 'inactive'
    }

    mostrarNombre(){
      console.log(this.nombreDelParque)
    }

    verDatosParque(event){
      // console.log(event)
      this.miParque = event;
      // console.log(this.miParque);
    }

    toggleStatus(status){
      console.log(this.status)
      if(status === 'inactive'){
        this.status = 'active';
      }else{
        this.status = 'inactive';
      } 
      }
    }
