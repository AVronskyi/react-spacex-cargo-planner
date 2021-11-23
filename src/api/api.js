const BASE_URL = "http://localhost:3000"

export const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
};

export const getShipments = async () => {
  return request(`/shipments.json`)
};
