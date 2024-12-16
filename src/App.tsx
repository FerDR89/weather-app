import { useEffect, useState } from "react";
import { setLocation } from "@reducers";
import {
  useAppDispatch,
  useCurrentWeather,
  useLocation,
  useNextFiveDaysWeather,
} from "@hooks";
import {
  Layout,
  SelectCity,
  WeatherCard,
  WeatherCardNextDay,
} from "@components";

function App() {
  const [cityName, setCityName] = useState<string | undefined>("Buenos Aires");
  const { lon, lat } = useLocation();

  const { currentWeather } = useCurrentWeather();

  const { nextDaysWeather } = useNextFiveDaysWeather();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lon && lat) {
      dispatch(
        setLocation({
          cityName: undefined,
          lat,
          lon,
        }),
      );
    }
  }, [dispatch, lon, lat]);

  useEffect(() => {
    if (cityName) {
      dispatch(
        setLocation({
          cityName,
          lat: undefined,
          lon: undefined,
        }),
      );
    }
  }, [dispatch, cityName]);

  return (
    <Layout>
      <section className="items-center lg:grid lg:min-h-[80vh] lg:grid-cols-2 lg:gap-x-4">
        <article>
          <div className="my-4 flex justify-center">
            <SelectCity setCity={setCityName} />
          </div>
          <div className="mb-10 flex items-center justify-center">
            {currentWeather && <WeatherCard {...currentWeather} />}
          </div>
        </article>

        {nextDaysWeather?.length > 0 && (
          <article className="grid w-full grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-1 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {nextDaysWeather?.length > 0 &&
              nextDaysWeather.map((w) => {
                return <WeatherCardNextDay key={w.day} {...w} />;
              })}
          </article>
        )}
      </section>
    </Layout>
  );
}

export default App;
