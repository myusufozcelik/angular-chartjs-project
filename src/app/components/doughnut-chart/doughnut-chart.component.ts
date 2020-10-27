import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {


  doughnutChartLabels: Label[] = ['Citroen', 'Audi', 'Toyota', 'Volkswagen', 'Ford', 'Mercedes-Benz'];
  doughnutChartData: MultiDataSet = [ [15, 35, 55, 70, 30, 24]];
  doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
