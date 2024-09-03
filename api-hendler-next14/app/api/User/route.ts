import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams);
  return Response.json({ message: "ok" });
}
export async function POST(req: Request) {
  const { name } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name,
      },
    });
    return Response.json({ message: "okk", user });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
