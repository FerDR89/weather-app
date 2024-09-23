import {
  IWeather,
  IWeatherForecast,
  IWeatherForecastList,
  IWeatherNextFiveResponse,
  IWeatherTodayResponse,
} from "../interfaces/weather";
import capitalize from "./capitalize";
import getDate from "./getDate";
import getWeekDay from "./getWeekDay";
import timestampToDate from "./timestampToDate";

export const weatherTodayFormatter = (
  data: IWeatherTodayResponse
): IWeather => ({
  cityName: data?.name,
  day: timestampToDate(data?.dt),
  temp: Math.ceil(data?.main["temp"]),
  feels_like: Math.ceil(data?.main["feels_like"]),
  temp_min: Math.ceil(data?.main["temp_min"]),
  temp_max: Math.ceil(data?.main["temp_max"]),
  humidity: Math.ceil(data?.main["humidity"]),
  description: capitalize(data?.weather[0]["description"]),
  icon: data?.weather[0]["icon"],
});

export const weatherNextFiveFormatter = (
  data: IWeatherNextFiveResponse
): IWeatherForecast => {
  const filterNextFiveDays = data.list.filter(
    (t: IWeatherForecastList, i: number) => {
      const currentDay = getDate(t.dt);
      const nextDay = getDate(data.list[i + 1]?.dt);
      return currentDay !== nextDay;
    }
  );

  filterNextFiveDays.shift();

  const mappedNextFiveDays = filterNextFiveDays.map(
    (t: IWeatherForecastList) => ({
      day: getWeekDay(t?.dt),
      temp_min: Math.ceil(t?.main["temp_min"]),
      temp_max: Math.ceil(t?.main["temp_max"]),
      description: capitalize(t?.weather[0]["description"]),
      icon: t?.weather[0]["icon"],
    })
  );

  return {
    cityName: data.city.name,
    data: mappedNextFiveDays,
  };
};
