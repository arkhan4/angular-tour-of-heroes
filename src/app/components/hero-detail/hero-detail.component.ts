import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../@services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   hero? : Hero;

  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private heroService : HeroService
  ) { }

  ngOnInit(): void {
    this.loadHero();
  }

  loadHero() : void {
    let strId = this.route.snapshot.paramMap.get('id');

    if(strId)
    {
      this.heroService.getHero(+strId).subscribe(hero=>this.hero=hero);
    }
    else
    {

    }
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }
}
