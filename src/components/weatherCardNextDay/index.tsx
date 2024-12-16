import { IWeatherNextFiveDays } from "@interfaces";

const WeatherCardNextDay = ({
  day,
  temp_max,
  temp_min,
  icon,
}: IWeatherNextFiveDays) => {
  return (
    <article className="rounded bg-[#661cc4]/25 px-1 py-2 sm:p-2">
      <header className="text-center sm:text-right">
        <p className="text-xs font-light sm:text-sm">{day}</p>
      </header>
      <main className="flex flex-col items-center">
        <div className={`flex h-auto w-20 items-center sm:w-32 md:w-40`}>
          <img
            src={`/icons/${icon}.svg`}
            alt="Weather Icon"
            className={`h-auto w-20 sm:w-32 md:w-40`}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-2">
          <p className="text-xs font-light sm:text-sm">Min: {temp_min} °</p>
          <p className="text-xs font-light sm:text-sm">Max: {temp_max} °</p>
        </div>
      </main>
    </article>
  );
};

export default WeatherCardNextDay;
