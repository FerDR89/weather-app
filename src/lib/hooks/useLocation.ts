import { useEffect, useState } from "react";
import { ILocation } from "@interfaces";

const useLocation = () => {
  const [coords, setCoords] = useState<
    Pick<ILocation, "lat" | "lon"> | undefined
  >();

  const success = ({
    coords: { latitude, longitude },
  }: {
    coords: { latitude: number; longitude: number };
  }) => {
    setCoords({ lat: latitude, lon: longitude });
  };

  function error(err: unknown) {
    console.error(err);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });
  }, []);

  return { lon: coords?.lon, lat: coords?.lat };
};

export default useLocation;
