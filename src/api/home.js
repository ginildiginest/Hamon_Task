import { BASEURL } from "../config";

export async function getRestaurants () {
  const res = await fetch(BASEURL);
  const data = await res.json();
  return data;
}