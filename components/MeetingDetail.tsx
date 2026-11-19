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
    <article className="border border-ward-line bg-white shadow-[0_12px_40px_rgba(38,48,42,.07)] print:border-0 print:shadow-none">
      <header className="border-b border-ward-line px-6 py-9 text-center">
        <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.14em] text-ward-gold">Oakridge 2nd Ward</p>
        <h1 className="mb-1 mt-2 font-serif text-[38px] text-ward-green">{formatMeetingType(meeting.meetingType)}</h1>
        <h2 className="m-0 text-base">{formatDate(meeting.date)}</h2>
      </header>

      <div className="grid grid-cols-2 border-b border-ward-line max-sm:grid-cols-1">
        <div className="grid gap-1 px-8 py-5 max-sm:border-b max-sm:border-ward-line"><span className="text-[10px] uppercase tracking-widest text-ward-muted">Presiding</span><strong className="font-serif">{meeting.presiding}</strong></div>
        <div className="grid gap-1 border-l border-ward-line px-8 py-5 max-sm:border-l-0"><span className="text-[10px] uppercase tracking-widest text-ward-muted">Conducting</span><strong className="font-serif">{meeting.conducting}</strong></div>
      </div>

      <ol className="m-0 list-none px-8 py-3 max-sm:px-5">
        <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Opening Hymn</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">#{meeting.openingHymn.number} · {meeting.openingHymn.title}</strong></li>
        <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Opening Prayer</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">{meeting.openingPrayer}</strong></li>
        {meeting.wardBusiness.length > 0 ? meeting.wardBusiness.map((item) => (
          <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3" key={item.description}><span className="text-sm text-ward-muted">Ward Business</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">{item.description}</strong></li>
        )) : (
          <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Ward Business</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">None</strong></li>
        )}
        <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Stake Business</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">{meeting.stakeBusiness ? "Stake announcements and business" : "None"}</strong></li>
        <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Sacrament Hymn</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">#{meeting.sacramentHymn.number} · {meeting.sacramentHymn.title}</strong></li>
        <li className="grid min-h-[52px] grid-cols-2 items-center bg-background px-3 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Sacrament</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">Administered by the Aaronic Priesthood</strong></li>
        {meeting.speakers.map((speaker) => (
          <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3" key={`${speaker.type}-${speaker.name}`}>
            <span className="text-sm text-ward-muted">{speaker.type === "speaker" ? speaker.topic : "Musical Number"}</span>
            <strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">{speaker.name}{speaker.type === "musical-number" && speaker.topic ? ` · ${speaker.topic}` : ""}</strong>
          </li>
        ))}
        <li className="grid min-h-[52px] grid-cols-2 items-center border-b border-ward-line/70 max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Closing Hymn</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">#{meeting.closingHymn.number} · {meeting.closingHymn.title}</strong></li>
        <li className="grid min-h-[52px] grid-cols-2 items-center max-sm:grid-cols-1 max-sm:py-3"><span className="text-sm text-ward-muted">Closing Prayer</span><strong className="text-right font-serif text-sm max-sm:mt-1 max-sm:text-left">{meeting.closingPrayer}</strong></li>
      </ol>

      {meeting.announcements && (
        <section className="border-t border-ward-line px-8 py-5 max-sm:px-5">
          <h2 className="font-serif text-lg text-ward-green">Announcements</h2>
          <ul className="text-sm leading-7 text-ward-muted">{meeting.announcements.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      )}
    </article>
  );
}
