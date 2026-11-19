import { getMeetingById } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
): Promise<Response> {
  const { id } = await context.params;
  const numericId = Number(id);
  const meeting: SacramentMeeting | null =
    Number.isInteger(numericId) ? getMeetingById(numericId) : null;
  if (!meeting) {
    const body: { error: string } = { error: "Meeting not found" };
    return Response.json(body, { status: 404 });
  }
  return Response.json(meeting);
}
