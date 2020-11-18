import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'jv-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //por padrão os metodos chamados no template são executados a cada chamada, porem utilizando
})                                                 //ChaangeDetectionStrategy.onPush, o metodo vai ser chamado so quando o input mudar de valor
export class CurrentWeatherComponent{

  @Input()cityWeather: CityWeather;
  @Output() toogleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`
  }

  onToogleBookmark(){
    this.toogleBookmark.emit;
  }

}
