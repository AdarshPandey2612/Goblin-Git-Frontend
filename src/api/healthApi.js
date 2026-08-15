import { apiRequest } from "./api";

export function checkBackend() {
  return apiRequest("/health");
}
