import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

function formatDate(date: SacramentMeeting["date"]): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function formatMeetingType(meetingType: SacramentMeeting["meetingType"]): string {
  return `${meetingType[0].toUpperCase()}${meetingType.slice(1)} Meeting`;
}

export default function MeetingCard({
  meeting,
}: {
  meeting: SacramentMeeting;
}) {
  return (
    <article className="grid min-h-[250px] grid-cols-[7px_1fr] border border-ward-line bg-white transition-shadow hover:shadow-lg">
      <div className="bg-ward-green" aria-hidden="true" />
      <div className="flex flex-col p-7">
        <p className="m-0 text-xs font-extrabold uppercase tracking-wider text-ward-gold">{formatDate(meeting.date)}</p>
        <h2 className="mb-5 mt-2.5 font-serif text-[26px] text-ward-green">{formatMeetingType(meeting.meetingType)}</h2>
        <p className="text-sm text-ward-muted">
          Conducted by <strong>{meeting.conducting}</strong>
        </p>
        <Link className="mt-auto font-bold text-ward-green hover:underline" href={`/meetings/${meeting.id}`}>
          View agenda <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
