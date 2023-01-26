import { BASE_API_URL } from "../config";

const getPeople = async ({ pageParam = 1 }) => {
  console.log("pageParam", pageParam);
  const res = await fetch(`${BASE_API_URL}people/?page=${pageParam}`);
  return res.json();
};

const getVehicle = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(`${BASE_API_URL}/vehicles/${id}/`);
  return res.json();
};

export { getPeople, getVehicle };
