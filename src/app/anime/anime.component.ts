import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { dataAnime } from './dataAnime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  animes: Array<Anime> = [];

  constructor() { }
  getAnimeList(): Array<Anime> {
    return dataAnime;
  }

  ngOnInit() {
    this.animes = this.getAnimeList();
  }

}
