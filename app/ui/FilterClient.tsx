"use client";

type Restaurant = {
  id: number;
  name: string;
  area: string;
  category: string;
  mapUrl: string;
};

export default function FilterClient({ restaurants }: { restaurants: Restaurant[] }) {
  return (
    <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
      {restaurants.map((r) => (
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

          <div style={{ marginTop: 6, opacity: 0.75, lineHeight: 1.4 }}>
            {r.area} · {r.category}
          </div>

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
  );
}
