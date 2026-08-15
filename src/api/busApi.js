import { apiRequest } from "./api";

export function getBuses() {
  return apiRequest("/buses");
}

export function getBusById(id) {
  return apiRequest(`/buses/${id}`);
}

export function createBus(busData) {
  return apiRequest("/buses", {
    method: "POST",
    body: JSON.stringify(busData),
  });
}