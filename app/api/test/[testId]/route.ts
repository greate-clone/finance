import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { testId: string } }
) => {
  return NextResponse.json({
    hello: "world",
    testId: params.testId,
  });
};
