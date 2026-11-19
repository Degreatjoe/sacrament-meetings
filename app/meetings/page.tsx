import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export const metadata = {
  title: "Meeting Agenda | Oakridge 2nd Ward",
};

export default function MeetingsPage() {
  const meetings: SacramentMeeting[] = getMeetings();

  return (
    <section className="meetings-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Ward Program</p>
          <h1>Recent Sacrament Meetings</h1>
        </div>
        <p>{meetings.length} meetings</p>
      </div>
      <div className="meeting-grid">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}
