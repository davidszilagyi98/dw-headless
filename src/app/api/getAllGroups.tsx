import { fetchApi } from "./server";

export default async function getAllGroups() {
  const response = await fetchApi(`/dwapi/ecommerce/groups`);

  if (!response.ok) {
    throw new Error("failed to fetch content");
  }

  return response.json();
}
