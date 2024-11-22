import { IWeather } from "@interfaces";
import { Icon } from "@components";

const WeatherCard = ({
  cityName,
  day,
  description,
  feels_like,
  icon,
  temp,
  temp_max,
  temp_min,
}: IWeather) => {
  return (
    <article className="min-w-80 rounded bg-[#661cc4]/25 px-4 py-2 shadow-card md:grid md:gap-x-4 md:[grid-template-areas:'header_header''main_footer']">
      <header className="text-right md:[grid-area:header]">
        <p className="text-sm font-light">{day}</p>
      </header>
      <main className="mt-4 flex flex-col items-center md:[grid-area:main]">
        <div className="mb-3 flex flex-col items-center">
          <p className="text-2xl">{cityName}</p>
          <p className="text-sm font-extralight sm:text-xs">{description}</p>
        </div>

        <div className="relative">
          <p className="text-8xl">
            {temp} <span className="absolute top-0 text-2xl"> °C</span>
          </p>
        </div>

        <div className="my-1 flex items-center justify-center gap-x-2">
          <p className="text-base font-light">Min: {temp_min} °</p>
          <p className="text-base font-light">Max: {temp_max} °</p>
        </div>
        <p className="my-1 text-sm font-extralight sm:text-xs">
          Sensación térmica {feels_like} °
        </p>
      </main>
      <footer className="flex flex-col items-center justify-center md:[grid-area:footer]">
        <Icon iconName={icon} />
      </footer>
    </article>
  );
};

export default WeatherCard;
