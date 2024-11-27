import {
  IWeather,
  IWeatherForecastList,
  IWeatherNextFiveDays,
  IWeatherNextFiveResponse,
  IWeatherTodayResponse,
} from "@interfaces";
import { capitalize, getWeekDay, timestampToDate } from "@utils";

export const weatherTodayFormatter = (
  data: IWeatherTodayResponse,
): IWeather => ({
  cityName: data?.name,
  day: timestampToDate(data?.dt),
  temp: Math.ceil(data?.main["temp"]),
  feels_like: Math.ceil(data?.main["feels_like"]),
  description: capitalize(data?.weather[0]["description"]),
  icon: data?.weather[0]["icon"],
});

export const weatherNextFiveFormatter = (data: IWeatherNextFiveResponse) => {
  const today = getWeekDay(new Date().getTime() / 1000);

  const mapedArr = data.list.map((t: IWeatherForecastList) => ({
    day: today === getWeekDay(t?.dt) ? "Hoy" : getWeekDay(t?.dt),
    temp_min: Math.ceil(t?.main["temp_min"]),
    temp_max: Math.ceil(t?.main["temp_max"]),
    icon: t?.weather[0]["icon"],
  }));

  const NextFiveDaysArray = Object.values(
    mapedArr.reduce(
      (acc, { day, temp_min, temp_max, icon }) => {
        if (!acc[day]) {
          acc[day] = { day, temp_min, temp_max, icon };
        } else {
          acc[day].temp_min = Math.min(acc[day].temp_min, temp_min);
          acc[day].temp_max = Math.max(acc[day].temp_max, temp_max);
        }
        return acc;
      },
      {} as { [key: string]: IWeatherNextFiveDays },
    ),
  );
  return NextFiveDaysArray.slice(0, NextFiveDaysArray.length - 1);
};
