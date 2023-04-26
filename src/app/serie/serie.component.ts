import { Component, OnInit } from '@angular/core';
import {Serie} from './serie';
import {SerieService } from './serie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {

  public series: Array<Serie> =[];
  public average: number = 0;
  public selectedSeries: any;

  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  onClick() {
    console.log("Has clickeado la serie");
  }

  constructor(private serieService: SerieService) {}


  ngOnInit() {
    this.getSeries();
    this.average = this.serieService.calculateAverage(this.series);
  }

}

