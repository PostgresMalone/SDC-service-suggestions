import http from "k6/http";
import { sleep } from "k6";

const randomNumber = () => {
  return Math.round(Math.random() * 1000000);
}

// const options = {
//   vus: 100,
//   duration: '60s'
// }

export default function () {
  http.get(`http://localhost:3050/homes/${randomNumber()}/suggestions`);
};