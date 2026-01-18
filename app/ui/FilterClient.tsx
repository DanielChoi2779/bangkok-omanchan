"use client";

type Restaurant = {
  id: number;
  name: string;
  area: string;
  note: string;
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
          <strong>{r.name}</strong> ({r.area}) - {r.note}
        </li>
      ))}
    </ul>
  );
}
