import { capitalize } from "@utils";

const timestampToDate = (time: number): string => {
  const formattedDate = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(time * 1000));

  const finalDate = formattedDate
    .split(" ")
    .map((word, i) => (i === 0 || i === 3 ? capitalize(word) : word))
    .join(" ");

  return finalDate;
};

export default timestampToDate;
