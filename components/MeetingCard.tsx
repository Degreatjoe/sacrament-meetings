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
    <article className="meeting-card">
      <div className="meeting-card-accent" />
      <div className="meeting-card-body">
        <p className="meeting-date">{formatDate(meeting.date)}</p>
        <h2>{formatMeetingType(meeting.meetingType)}</h2>
        <p className="meeting-conducted">
          Conducted by <strong>{meeting.conducting}</strong>
        </p>
        <Link className="text-link" href={`/meetings/${meeting.id}`}>
          View agenda <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
