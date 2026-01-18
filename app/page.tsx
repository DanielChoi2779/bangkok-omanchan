type Restaurant = {
  id: number;
  name: string;
  area: string;
  note: string;
};

async function getRestaurants() {
  const res = await fetch("http://localhost:3000/api/restaurants", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return res.json();
}

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <main style={{ padding: 40 }}>
      <h1>방콕 오만찬 🍜</h1>
      <p>로그인 없이 보는 방콕 직장인 맛집 리스트</p>

      <ul>
        {restaurants.map((r: Restaurant) => (
          <li key={r.id}>
            <strong>{r.name}</strong> ({r.area}) – {r.note}
          </li>
        ))}
      </ul>
    </main>
  );
}
