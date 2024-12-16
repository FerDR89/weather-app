import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CITIES } from "./constants";

const SelectCity = ({
  setCity,
}: {
  setCity: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <form
      id="selectCity"
      onChange={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(e.target.value);
      }}
      className="min-w-80 sm:w-[400px]"
      role="form"
    >
      <select
        form="selectCity"
        name="selectCity"
        className="w-full rounded-sm p-1 dark:bg-[#661cc4]/25"
      >
        {CITIES.map((city) => (
          <option key={city} value={city} className="bg-indigo-500">
            {city}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectCity;
