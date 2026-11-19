import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export const metadata = {
  title: "Meeting Agenda | Oakridge 2nd Ward",
};

export default function MeetingsPage() {
  const meetings: SacramentMeeting[] = getMeetings();

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-7 flex items-end justify-between border-b border-ward-line pb-5">
        <div>
          <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.14em] text-ward-gold">Ward Program</p>
          <h1 className="mb-0 mt-2 font-serif text-4xl text-ward-green">Recent Sacrament Meetings</h1>
        </div>
        <p className="text-sm text-ward-muted">{meetings.length} meetings</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}
