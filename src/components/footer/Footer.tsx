const Footer = () => {
  return (
    <footer className="flex h-[10vh] w-screen max-w-screen-xl items-center justify-center py-4">
      <div className="flex gap-x-2">
        <h3 className="text-zinc-400">Resources:</h3>
        <div>
          <a
            href="https://openweathermap.org/api"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400"
          >
            Open Weather
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://basmilius.github.io/weather-icons/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400"
          >
            Meteocons
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
