import { useQuery } from "@tanstack/react-query";
import { fetchNextFiveDays } from "@services/fetchers";
import { useAppSelector } from "@hooks";
import { selectLocation } from "@reducers";
import { weatherNextFiveFormatter } from "../utils/weatherDataFormatter";
import { IWeather } from "@interfaces";

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

  const data: IWeather[] = rawData && weatherNextFiveFormatter(rawData);

  return {
    nextDaysWeather: data,
    nextDaysWeatherIsLoading: isLoading,
    nextDaysWeatherIsError: isError,
    nextDaysWeatherError: error,
  };
};

export default useNextFiveDaysWeather;
