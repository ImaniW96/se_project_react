const baseUrl = "http://localhost:3001";
const headers = "Content-Type: application/json";
header = this._headers;
function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };

const deleteCardApi = (Id) => {
  return fetch(`${this._baseUrl}/id/${Id}`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => {
    return this.checkResponse(res);
  });
};
const addItemsAPI = ({ name, weather, imageUrl }) => {
  return fetch(`${this._baseUrl}/id/${Id}`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then((res) => {
    return this.checkResponse(res);
  });
};
