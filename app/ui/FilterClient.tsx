type Restaurant = {
  id: number;
  name: string;
  area: string;
  category: string;
  mapUrl: string;
};

export default function FilterClient({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  return (
    <ul>
      {restaurants.map((r) => (
        <li key={r.id}>
          <strong>{r.name}</strong> ({r.area}) · {r.category}
          <br />
          <a href={r.mapUrl} target="_blank">
            지도 보기
          </a>
        </li>
      ))}
    </ul>
  );
}
