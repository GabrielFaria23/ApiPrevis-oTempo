import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Units } from 'src/app/shared/models/units.enum';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'jv-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //por padrão os metodos chamados no template são executados a cada chamada, porem utilizando
})                                                 //ChaangeDetectionStrategy.onPush, o metodo vai ser chamado so quando o input mudar de valor
export class CurrentWeatherComponent{

  @Input()cityWeather: CityWeather;
  @Input()isFavorite: boolean;
  @Input()unit: Units;
  @Output()toggleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`
  }

  onToggleBookmark(){
    this.toggleBookmark.emit();
  }

}
