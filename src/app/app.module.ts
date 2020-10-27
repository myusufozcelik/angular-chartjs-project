import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LineChartsComponent } from './components/line-charts/line-charts.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PolarAreaChartComponent } from './components/polar-area-chart/polar-area-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineChartsComponent,
    BarChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    PolarAreaChartComponent,
    PieChartComponent,
    BubbleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
