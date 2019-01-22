import http from "k6/http";

const generateNumberBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = (n) => {
  return Math.round(Math.random() * n)
}

export default function () {
  const rangeToQuery = generateNumberBetweenRange(1, 10);

  if (rangeToQuery <= 7) {
    http.get(`http://localhost:3050/homes/${randomNumber(7000000)}/suggestions`)
  } else {
    http.get(`http://localhost:3050/homes/${generateNumberBetweenRange(7000001, 10000000)}/suggestions`)
  }
};