import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HeroesService, Heroe } from "../../servicios/heroes.services";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
               ) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( id:number ){
    this.router.navigate(['heroe', id]);
  }

}
