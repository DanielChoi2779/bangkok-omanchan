import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("restaurants")
    .select("id,name,area,category,map_url,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const mapped = (data ?? []).map((r) => ({
    id: r.id,
    name: r.name,
    area: r.area,
    category: r.category,
    mapUrl: r.map_url,
  }));

  return NextResponse.json(mapped);
}
