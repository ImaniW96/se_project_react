import { baseUrl, checkResponse } from "./api";
function getHeaders(token) {
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return headers;
}
export function signup({ name, avatar, email, password }, token) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: getHeaders(token),
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export function signin(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
}

// check if token if valid
