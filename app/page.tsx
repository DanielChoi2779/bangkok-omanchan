import restaurants from "../data/restaurants.json";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>🍽️ Bangkok O-Manchan</h1>
      <p>방콕 오만찬 맛집 리스트</p>

      <ul>
        {restaurants.map((r: any, i: number) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <strong>{r.name}</strong> — {r.area} / {r.category} <br />
            <a href={r.mapUrl} target="_blank">지도 보기</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
