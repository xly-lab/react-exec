import ajax from "./ajax";

export const reqestMostData = () =>
  ajax("http://127.0.0.1:1100/get_most_data", "GET", {});
