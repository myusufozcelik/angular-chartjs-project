import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
  'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];
  radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis' }
  ];
  radarChartType: ChartType = 'radar';

    constructor() { }

  ngOnInit(): void {
  }

}
