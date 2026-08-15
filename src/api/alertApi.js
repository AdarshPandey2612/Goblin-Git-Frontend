import { apiRequest } from "./api";

export function getAlerts() {
  return apiRequest("/alerts");
}

export function getAlertById(id) {
  return apiRequest(`/alerts/${id}`);
}