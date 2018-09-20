import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../servicios/heroes.services";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  term: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heroes = this._heroesService.buscarHeroes(this.term);
    });
  }
}
