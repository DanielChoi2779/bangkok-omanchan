import FilterClient from "./FilterClient";

async function getRestaurants() {
  const res = await fetch("http://localhost:3000/api/restaurants", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return res.json();
}

export default async function HomePage() {
  const restaurants = await getRestaurants(); // ⭐ 이 줄

  return (
    <FilterClient restaurants={restaurants} />
  );
}
