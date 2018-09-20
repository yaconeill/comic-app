import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../servicios/heroes.services";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroeService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
