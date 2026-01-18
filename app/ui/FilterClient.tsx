"use client";

import { useMemo, useState } from "react";

type Restaurant = {
  id: number;
  name: string;
  area: string;
  category: string;
  mapUrl: string;
};

function uniq(arr: string[]) {
  return Array.from(new Set(arr));
}

export default function FilterClient({ restaurants }: { restaurants: Restaurant[] }) {
  const areas = useMemo(() => ["전체", ...uniq(restaurants.map((r) => r.area))], [restaurants]);
  const cats = useMemo(
    () => ["전체", ...uniq(restaurants.map((r) => r.category))],
    [restaurants]
  );

  const [area, setArea] = useState("전체");
  const [cat, setCat] = useState("전체");

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const okArea = area === "전체" ? true : r.area === area;
      const okCat = cat === "전체" ? true : r.category === cat;
      return okArea && okCat;
    });
  }, [restaurants, area, cat]);

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <select value={area} onChange={(e) => setArea(e.target.value)} style={{ padding: "10px 12px", borderRadius: 12 }}>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        <select value={cat} onChange={(e) => setCat(e.target.value)} style={{ padding: "10px 12px", borderRadius: 12 }}>
          {cats.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <span style={{ opacity: 0.7 }}>{filtered.length}개</span>
      </div>

      <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
        {filtered.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid rgba(0,0,0,0.10)",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800 }}>{r.name}</div>
            <div style={{ marginTop: 6, opacity: 0.75 }}>{r.area} · {r.category}</div>

            <div style={{ marginTop: 12 }}>
              <a
                href={r.mapUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.12)",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                지도 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
