import { writable } from "svelte/store";

export const charities = writable([]);
export const charity = writable([]);

async function getCharities() {
  const res = await fetch(
    "https://my-json-server.typicode.com/magnoliaID/exploresemarangapi/apiexploresmg"
  );
  const data = await res.json();
  charities.set(data);

  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}

export async function getCharity(id) {
  const res = await fetch(
    `https://my-json-server.typicode.com/magnoliaID/exploresemarangapi/apiexploresmg/${id}`
  );
  const data = await res.json();
  charity.set(data);
  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}

getCharities();
