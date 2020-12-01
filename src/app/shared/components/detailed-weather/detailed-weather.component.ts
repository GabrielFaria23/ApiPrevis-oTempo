import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Units } from '../../models/units.enum';
import { Weather } from '../../models/weather.model';
import { unitToSymbol } from '../../utils/units.utils';

@Component({
  selector: 'jv-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent implements OnInit{

  @Input() weather: Weather;
  @Input() unit: Units;

  ngOnInit() {
    if(this.weather){
      this.weather.feelsLike = this.weather.feelsLike - 273;
      this.weather.temp = this.weather.temp - 273;
    }
  }

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`;
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }



}
