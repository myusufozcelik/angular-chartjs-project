import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { LineChartsComponent } from './components/line-charts/line-charts.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './components/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'bar-chart', pathMatch: 'full' },
  { path: 'bar-chart', component: BarChartComponent},
  { path: 'line-chart', component: LineChartsComponent},
  { path: 'bubble-chart', component: BubbleChartComponent},
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'pie-chart', component: PieChartComponent},
  { path: 'polar-area-chart', component: PolarAreaChartComponent},
  { path: 'radar-chart', component: RadarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
