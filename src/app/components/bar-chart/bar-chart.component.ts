import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chartType = 'bar';
  chartLabel ?: string[] = [];
  barChartData: any;

  chartOptions = {


    tooltips: {
      display: true,
      backgroundColor: '#fff',
      titleFontSize: 14,
      titleFontColor: 'chocolate',
      bodyFontColor: '#000',
      bodyFontSize: 12,
      displayColors: false,
    },

    animation: {
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    responsive: true,
    legend: {
      display: true,
      position: 'top',
      cornerRadius: 10,
      titleSpacing: 4,
      footerFontStyle: 'bold',
      multiKeyBackground: '#eee'
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Data',
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Data Value'
        },
      }]
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.chartFilled();
  }

  chartFilled(): any {
    this.chartLabel.push('Something about Red ', 'Something about Blue ', 'Something about Yellow', 'Something about Green', 'Something about Orange');
    this.barChartData = [
      { data: [39, 29 , 19 , 67 , 23, 24], label: 'Value One'},
      { data: [66, 24, 23, 95, 19, 56], label: 'Value Two'}
    ];
  }



}
