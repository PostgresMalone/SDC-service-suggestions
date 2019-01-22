import http from "k6/http";

const randomNumber = () => {
  return Math.round(Math.random() * 1000000);
}

export default function () {
  http.post(`http://localhost:3050/homes/7${randomNumber()}/suggestions`);
};