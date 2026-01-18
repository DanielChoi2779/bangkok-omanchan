import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "쏨분 씨푸드",
      area: "아속",
      note: "회사 회식 1등"
    },
    {
      id: 2,
      name: "쏭와",
      area: "실롬",
      note: "현지인 맛집"
    },
    {
      id: 3,
      name: "이산 로컬",
      area: "프롬퐁",
      note: "점심 최강"
    }
  ]);
}
