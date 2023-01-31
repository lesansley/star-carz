import { BASE_API_URL } from "../config";

const fetchPeople = async ({ queryKey, pageParam }) => {
  const queryUrl = () => {
    if (queryKey[1] !== "") {
      return `${BASE_API_URL}people/?&search=${queryKey[1]}`;
    } else {
      return `${BASE_API_URL}people/`;
    }
  };
  const url = pageParam ? pageParam : queryUrl();
  const request = await fetch(url);
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
