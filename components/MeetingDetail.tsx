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

export default function MeetingDetail({
  meeting,
}: {
  meeting: SacramentMeeting;
}) {
  return (
    <article className="meeting-detail">
      <header className="agenda-header">
        <p>Oakridge 2nd Ward</p>
        <h1>{formatMeetingType(meeting.meetingType)}</h1>
        <h2>{formatDate(meeting.date)}</h2>
      </header>

      <div className="leadership-row">
        <div><span>Presiding</span><strong>{meeting.presiding}</strong></div>
        <div><span>Conducting</span><strong>{meeting.conducting}</strong></div>
      </div>

      <ol className="agenda-list">
        <li><span>Opening Hymn</span><strong>#{meeting.openingHymn.number} · {meeting.openingHymn.title}</strong></li>
        <li><span>Opening Prayer</span><strong>{meeting.openingPrayer}</strong></li>
        {meeting.wardBusiness.map((item) => (
          <li key={item.description}><span>Ward Business</span><strong>{item.description}</strong></li>
        ))}
        {meeting.stakeBusiness && (
          <li><span>Stake Business</span><strong>Stake announcements and business</strong></li>
        )}
        <li><span>Sacrament Hymn</span><strong>#{meeting.sacramentHymn.number} · {meeting.sacramentHymn.title}</strong></li>
        <li className="sacrament-row"><span>Sacrament</span><strong>Administered by the Aaronic Priesthood</strong></li>
        {meeting.speakers.map((speaker) => (
          <li key={`${speaker.type}-${speaker.name}`}>
            <span>{speaker.type === "speaker" ? speaker.topic : "Musical Number"}</span>
            <strong>{speaker.name}{speaker.type === "musical-number" && speaker.topic ? ` · ${speaker.topic}` : ""}</strong>
          </li>
        ))}
        <li><span>Closing Hymn</span><strong>#{meeting.closingHymn.number} · {meeting.closingHymn.title}</strong></li>
        <li><span>Closing Prayer</span><strong>{meeting.closingPrayer}</strong></li>
      </ol>

      {meeting.announcements && (
        <section className="announcements">
          <h2>Announcements</h2>
          <ul>{meeting.announcements.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      )}
    </article>
  );
}
