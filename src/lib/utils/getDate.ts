const getDate = (time: number) => {
  return new Date(time * 1000).getDate();
};

export default getDate;
