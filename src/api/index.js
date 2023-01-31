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
  try {
    const request = await fetch(queryKey[1]);
    return await request.json();
  } catch (err) {
    console.error(`Network error: ${err.message}`);
    return null;
  }
};

export { fetchPeople, fetchVehicles };
