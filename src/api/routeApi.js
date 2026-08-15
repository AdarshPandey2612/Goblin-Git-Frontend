import { apiRequest } from "./api";

export function getRoutes() {
  return apiRequest("/routes");
}

export function getRouteById(id) {
  return apiRequest(`/routes/${id}`);
}