import FilterClient from "./ui/FilterClient";

type Restaurant = {
  id: number;
  name: string;
  area: string;
  note: string;
  mapUrl?: string;
  tags?: string[];
};

async function getRestaurants(): Promise<Restaurant[]> {
  const res = await fetch("/api/restaurants", { cache: "no-store" });
  return (await res.json()) as Restaurant[];
}

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1>방콕 오만찬 🍜</h1>
      <p>로그인 없이 보는 방콕 직장인 맛집 리스트</p>

      <FilterClient restaurants={restaurants} />
    </main>
  );
}
