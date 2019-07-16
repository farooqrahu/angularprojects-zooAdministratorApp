import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input() nombre: string;
    @Input() metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
      this.nombre = 'Parque natural para caballos';
      this.metros = 100;
      this.vegetacion = 'Alta';
      this.abierto = true;
    }

    ngOnChanges(changes: SimpleChanges){
      //este objeto guarda todos los cambios.
      console.log(changes);
    }

    ngOnInit(){
      console.log('método ngOnInit lanzado');
    }

    ngDoCheck(){
      console.log('método ngDoCheck lanzado');
    }
    ngOnDestroy(){
      console.log('Componente destruído!')
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
          'nombre': this.nombre,
          'metros': this.metros,
          'vegetacion': this.vegetacion,
          'abierto': this.abierto
        });
    }
    
}
