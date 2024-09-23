import timestampToDate from "./timestampToDate";

const getWeekDay = (time: number) => {
  return timestampToDate(time)
    .split(" ")
    .slice(0, 1)
    .join(" ")
    .replace(",", "");
};

export default getWeekDay;
