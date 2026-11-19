import { redirect, RedirectType } from "next/navigation";
import { getCurrentMeeting } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  const meeting = getCurrentMeeting();
  redirect(`/meetings/${meeting.id}`, RedirectType.replace);
}
