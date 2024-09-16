const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

function getHeaders(token) {
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return headers;
}
function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
  // .catch((error) => {
  //   console.error("Error fetching items:", error);
  // });
}
// function items() {
//   return fetch(`${baseUrl}/users/me`)
//     .then(checkResponse)

//     .catch((error) => {
//       console.error("Error fetching items:", error);
//     });
// }
function getCurrentUser(token) {
  console.log(token);
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: getHeaders(token),
  }).then((res) => {
    return checkResponse(res);
  });
}
function deleteItemById(Id, token) {
  return fetch(`${baseUrl}/items/${Id}`, {
    method: "DELETE",
    headers: getHeaders(token),
  }).then((res) => {
    return checkResponse(res);
  });
}

function addItem({ name, weather, imageUrl }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: getHeaders(token),
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then((res) => {
    return checkResponse(res);
  });
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}
function updateUser(FormData, token) {
  return fetch(`${baseUrl}/users/me `, {
    method: "PATCH",
    headers: getHeaders(token),
    body: JSON.stringify(FormData),
  }).then((res) => {
    return checkResponse(res);
  });
}
function likeCard(cardId, isLiked, token) {
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: getHeaders(token),
  }).then((res) => {
    return checkResponse(res);
  });
}
export {
  getItems,
  addItem,
  deleteItemById,
  checkResponse,
  getCurrentUser,
  updateUser,
  likeCard,
  baseUrl,
};
