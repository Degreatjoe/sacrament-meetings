import { getMeetingById } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
): Promise<Response> {
  const { id } = await context.params;
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) {
    const body: { error: string } = { error: "Meeting ID must be a number" };
    return Response.json(body, { status: 400 });
  }

  const meeting: SacramentMeeting | null = getMeetingById(numericId);
  if (!meeting) {
    const body: { error: string } = { error: "Meeting not found" };
    return Response.json(body, { status: 404 });
  }
  return Response.json(meeting);
}
