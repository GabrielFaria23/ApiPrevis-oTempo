import { Units } from '../models/units.enum';
import { Weather } from '../models/weather.model';

export function unitToSymbol(unit: Units): string {
  switch (unit) {
    case Units.Metric:
      return '˚C';
    case Units.Imperial:
      return '˚F';
    case Units.SI:
      return 'K';
  }
}

export function converValueTemperature(unidade: string, weather: Weather): Weather{
  if (unidade == '˚C'){
    weather.feelsLike = weather.feelsLike - 273.15;
    weather.maxTemp = weather.maxTemp - 273.15;
    weather.minTemp = weather.minTemp - 273.15;
    return weather;
  }else if(unidade == '˚F'){
    weather.feelsLike = (weather.feelsLike - 273) / 5;
    weather.maxTemp = weather.maxTemp - 273/15;
    weather.minTemp = weather.minTemp - 273;
    return weather;
  }
}