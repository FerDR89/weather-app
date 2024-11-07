import { useQuery } from "@tanstack/react-query";
import { fetchCurrentDay } from "../../services/fetchers";
import { useAppSelector } from "./useAppSelector";
import { selectLocation } from "../reducers/locationSlice";
import { IWeather } from "../interfaces/weather";
import { weatherTodayFormatter } from "../utils/weatherDataFormatter";

const useCurrentWeather = () => {
  const { cityName, lat, lon } = useAppSelector(selectLocation);

  const {
    data: rawData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["currentWeather", lat, lon, cityName],
    queryFn: () =>
      fetchCurrentDay({
        cityName,
        lat,
        lon,
      }),
  });

  const data: IWeather = rawData && weatherTodayFormatter(rawData);

  return {
    currentWeather: data,
    currentWeatherIsLoading: isLoading,
    currentWeatherIsError: isError,
    currentWeatherError: error,
  };
};

export default useCurrentWeather;
