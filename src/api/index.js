import axios from "axios";

const apiUrl = "http://localhost:3002/api";

export function getUsers() {
  return axios.get(`${apiUrl}/users`);
}
