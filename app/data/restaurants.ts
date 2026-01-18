import raw from "./restaurant.json";

export type Restaurant = {
  id: number;
  name: string;
  area: string;
  category: string;
  mapUrl: string;
};

export const restaurants: Restaurant[] = raw.map((r, index) => ({
  id: index + 1, // 🔑 반드시 필요
  name: r.name,
  area: r.area,
  category: r.category,
  mapUrl: r.mapUrl,
}));
