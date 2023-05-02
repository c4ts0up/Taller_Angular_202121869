import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';

import { SerieService } from '../serie.service';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  promedioTemporadas: number = 0;

  constructor(private serieService: SerieService) { }

  getSeriesList(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      // se debe llamar dentro del suscribe debido a que son asincrónicos
      this.getPromedioTemporadas();
    });
  }

  getPromedioTemporadas(): void {
    this.promedioTemporadas = 0;
    for (let s of this.series) {
      this.promedioTemporadas += s.seasons;
    }
    this.promedioTemporadas /= this.series.length;
  }

  ngOnInit() {
    this.getSeriesList();
  }
}
