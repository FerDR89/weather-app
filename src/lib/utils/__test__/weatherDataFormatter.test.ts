import { describe, assert, it } from "vitest";
import { IWeather, IWeatherTodayResponse } from "@lib/interfaces";
import { weatherTodayFormatter } from "@utils";

describe("Test weatherTodayFormatter util", () => {
  const mockedWeatherTodayResponse: IWeatherTodayResponse = {
    coord: {
      lon: -58.3772,
      lat: -34.6132,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "muy nuboso",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 22.81,
      feels_like: 23,
      temp_min: 21.85,
      temp_max: 23.86,
      pressure: 1018,
      humidity: 71,
      sea_level: 1018,
      grnd_level: 1017,
    },
    visibility: 10000,
    wind: {
      speed: 10.28,
      deg: 110,
      gust: 0,
    },
    clouds: {
      all: 75,
    },
    dt: 1732372218,
    sys: {
      type: 2,
      id: 2020613,
      country: "AR",
      sunrise: 1732350964,
      sunset: 1732401864,
    },
    timezone: -10800,
    id: 3435910,
    name: "Buenos Aires",
    cod: 200,
  };

  const mockedResult: IWeather = {
    cityName: "Buenos Aires",
    day: "Sábado, 23 de Noviembre",
    description: "Muy nuboso",
    feels_like: 23,
    icon: "04d",
    temp: 23,
  };

  it("Should transform the current weather response into a format accepted by WeatherCard component", () => {
    const result: IWeather = weatherTodayFormatter(mockedWeatherTodayResponse);
    assert.deepEqual(result, mockedResult);
  });
});
