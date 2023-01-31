import { BASE_API_URL } from "../config";

const fetchPeople = async ({
  queryKey,
  pageParam = `${BASE_API_URL}people/`,
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();
  return { response: results, nextPage: next };
};

const fetchVehicles = async ({ queryKey }) => {
  const request = await fetch(queryKey[1]);
  const results = await request.json();
  return { response: results };
};

export { fetchPeople, fetchVehicles };
