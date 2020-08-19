import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { MessagesService } from "../messages.service";
// import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;

  heroes: Hero[];

  selectedHero: Hero;

  className = "aaa";

  classFlag = false;

  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });

    // const array1 = [2, 3, 4];
    // const array2 = [1, ...array1, 5, 6];
    // console.log(array2);
    // console.log(Math.max(...[1, 2, 3]));
    // console.log(Math.max(1, 2, 3));

    // const keydownEvent = fromEvent<KeyboardEvent>(
    //   document,
    //   "keydown"
    // ).subscribe(evt => {
    //   this.flag = true;
    // });
    // const keyupEvent = fromEvent<KeyboardEvent>(document, "keyup").subscribe(
    //   evt => {
    //     this.flag = false;
    //   }
    // );
    // const clcikEvent = fromEvent<MouseEvent>(document, "click")
    //   .pipe(filter(evt => this.flag))
    //   .subscribe(evt => {
    //     console.log(evt);
    //   });

    // withLatestFrom(keydownEvent, clcikEvent).subscribe(evt => {
    //   console.log(evt);
    // });
    // merge(keydownEvent, clcikEvent).subscribe(evt => {
    //   console.log(evt);
    // });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add("a hero selected!");
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
