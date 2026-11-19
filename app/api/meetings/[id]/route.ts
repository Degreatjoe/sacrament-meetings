import { getMeetingById } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
): Promise<Response> {
  const { id } = await context.params;
  if (!/^[1-9]\d*$/.test(id)) {
    const body: { error: string } = { error: "Meeting ID must be a positive integer" };
    return Response.json(body, { status: 400 });
  }

  const numericId = Number(id);
  if (!Number.isSafeInteger(numericId)) {
    const body: { error: string } = { error: "Meeting ID must be a safe integer" };
    return Response.json(body, { status: 400 });
  }

  const meeting: SacramentMeeting | null = getMeetingById(numericId);
  if (!meeting) {
    const body: { error: string } = { error: "Meeting not found" };
    return Response.json(body, { status: 404 });
  }
  return Response.json(meeting);
}
