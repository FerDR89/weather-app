import { useQuery } from "@tanstack/react-query";
import { fetchNextFiveDays } from "../../api/fetchers";
import { useAppSelector } from "./useAppSelector";
import { selectLocation } from "../reducers/locationSlice";
import { IWeatherForecast } from "../interfaces/weather";
import { weatherNextFiveFormatter } from "../utils/weatherDataFormatter";

const useNextFiveDaysWeather = () => {
  const { cityName, lat, lon } = useAppSelector(selectLocation);
  const {
    data: rawData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["nextFiveDaysWeather", lat, lon, cityName],
    queryFn: () =>
      fetchNextFiveDays({
        cityName,
        lat,
        lon,
      }),
  });

  const data: IWeatherForecast = rawData && weatherNextFiveFormatter(rawData);

  return {
    nextDaysWeather: data,
    nextDaysWeatherIsLoading: isLoading,
    nextDaysWeatherIsError: isError,
    nextDaysWeatherError: error,
  };
};

export default useNextFiveDaysWeather;
