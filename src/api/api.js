const BASE_URL = "https://AVronskyi.github.io/react-spacex-cargo-planner"

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
