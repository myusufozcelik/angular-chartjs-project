import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent implements OnInit {

   polarAreaChartOptions: ChartOptions = {
     responsive: true
   };

  polarAreaChartLabels: Label[] = ['Fenerbahçe', 'Galatasaray', 'Beşiktaş', 'Trabzonspor'];
  polarAreaChartData: MultiDataSet = [[19, 22, 15, 6]];
  polarAreaChartType: ChartType = 'polarArea';
  constructor() { }

  ngOnInit(): void {
  }

}
