const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }
function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(checkResponse)
    .catch((error) => {
      console.error("Error fetching items:", error);
    });
}

function deleteItemById(Id) {
  return fetch(`${baseUrl}/items/${Id}`, {
    method: "DELETE",
    headers: headers,
  }).then((res) => {
    return checkResponse(res);
  });
}

function addItem({ name, weather, imageUrl }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
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

export { getItems, addItem, deleteItemById };
