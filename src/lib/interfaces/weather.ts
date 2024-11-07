export interface IWeather {
  day: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  icon: string;
  cityName?: string;
  feels_like?: number;
  humidity?: number;
  description?: string;
}

export interface IWeatherTodayResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherNextFiveResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherForecastList[];
  city: City;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IWeatherForecastList {
  dt: number;
  main: MainClass;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: { [key: string]: number };
  sys: { pod: string };
  dt_txt: Date;
}

interface MainClass extends Main {
  temp_kf: number;
}
