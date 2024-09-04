// signup(){
//     method: "POST",
// headers: {
//   "Content-Type": "application/json",
// },
// body: JSON.stringify({ name, avatar, email, password })
//  }
import { baseUrl, checkResponse } from "./api";

export function signup(name, avatar, email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
}
