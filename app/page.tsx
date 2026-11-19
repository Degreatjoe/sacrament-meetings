import Link from "next/link";
import { getCurrentMeeting } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export default function Home() {
  const meeting: SacramentMeeting = getCurrentMeeting();

  return (
    <section className="mx-auto grid min-h-[520px] max-w-6xl grid-cols-[1fr_330px] items-center gap-[70px] px-6 py-[70px] max-md:grid-cols-1 max-md:gap-8 max-md:py-10">
      <div>
        <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.14em] text-ward-gold">Sunday {meeting.meetingType} Meeting</p>
        <h1 className="mb-5 mt-3 font-serif text-[clamp(48px,7vw,74px)] leading-[.98] text-ward-green">Prepare to worship,<br />reflect, and renew.</h1>
        <p className="max-w-[520px] text-lg leading-7 text-ward-muted">Find the agenda and announcements for this week&apos;s sacrament meeting.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="grid min-h-12 place-items-center rounded bg-ward-green px-5 text-sm font-bold text-white hover:bg-ward-green/90" href={`/meetings/${meeting.id}`}>View this week&apos;s program</Link>
          <Link className="grid min-h-12 place-items-center rounded border border-ward-line bg-white px-5 text-sm font-bold hover:bg-background" href="/meetings">Browse all meetings</Link>
        </div>
      </div>
      <aside className="min-h-[260px] rounded-sm bg-ward-green p-9 text-white shadow-[14px_14px_0_#e1d6bd] max-md:max-w-[420px]">
        <p className="mb-7 mt-0 text-xs uppercase tracking-[.12em] text-ward-gold">This Week&apos;s Meeting</p>
        <h2 className="mb-[70px] mt-0 font-serif text-4xl">{meeting.meetingType[0].toUpperCase()}{meeting.meetingType.slice(1)} Meeting</h2>
        <span className="text-sm text-white/80">Presiding: {meeting.presiding}</span>
      </aside>
    </section>
  );
}
