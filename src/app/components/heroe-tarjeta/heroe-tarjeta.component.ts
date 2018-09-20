import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() id:number;
  // @Output() herorSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    // this.herorSeleccionado = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  verHeroe(){
    // this.herorSeleccionado.emit(this.id);
    this.router.navigate(['/heroe', this.id]);
  }

}
