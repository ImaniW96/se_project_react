export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getItems() {
    return fetch(`${this._baseUrl}/items`).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteItemById(Id) {
    return fetch(`${this._baseUrl}/id/${Id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
    });
  }

  addItem({ name, weather, imageUrl }) {
    return fetch(`${this._baseUrl}/items`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, weather, imageUrl }),
    }).then((res) => {
      return this.checkResponse(res);
    });
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}
export { getItems };

// export default class Api {
//   constructor({ baseUrl, headers }) {
//     // this._baseUrl = baseUrl;
//     // this._headers = headers;
//     this._baseUrl = "http://localhost:3001";
//     this._headers = "Content-Type: application/json";
//   }
// }

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }

// // export { getItems };

// deleteCardApi = (Id) => {
//   return fetch(`${this._baseUrl}/id/${Id}`, {
//     method: "DELETE",
//     headers: this._headers,
//   }).then((res) => {
//     return this.checkResponse(res);
//   });
// };
// addItemsAPI = ({ name, weather, imageUrl }) => {
//   return fetch(`${this._baseUrl}/id/${Id}`, {
//     method: "POST",
//     headers: this._headers,
//     body: JSON.stringify({ name, weather, imageUrl }),
//   }).then((res) => {
//     return this.checkResponse(res);
//   });
// };

// export { getItems };
