import { axiosAPI } from "@services";
import { isAxiosError } from "axios";
import { ILocation } from "../lib/interfaces/location";
const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

const fetchCurrentDay = async ({ lat, lon, cityName }: ILocation) => {
  const url =
    lon && lat
      ? `/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`
      : `/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await axiosAPI.get(url);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      console.log(error);
    }
  }
};

const fetchNextFiveDays = async ({ lat, lon, cityName }: ILocation) => {
  const url =
    lon && lat
      ? `/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`
      : `/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await axiosAPI.get(url);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      console.log(error);
    }
  }
};

export { fetchCurrentDay, fetchNextFiveDays };
