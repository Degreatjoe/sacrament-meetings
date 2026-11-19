import Image from "next/image";
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
      <aside className="relative isolate min-h-[360px] overflow-hidden rounded-sm bg-ward-green text-white shadow-[14px_14px_0_#e1d6bd] max-md:max-w-[420px]">
        <Image
          src="/meetinghouse.svg"
          alt="A meetinghouse framed by trees beneath a warm sunset"
          width={640}
          height={480}
          sizes="(max-width: 768px) 100vw, 330px"
          preload
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-ward-green/95 via-ward-green/50 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-9">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.12em] text-ward-gold">This Week&apos;s Meeting</p>
          <h2 className="mb-4 mt-0 font-serif text-4xl">{meeting.meetingType[0].toUpperCase()}{meeting.meetingType.slice(1)} Meeting</h2>
          <span className="text-sm text-white/90">Presiding: {meeting.presiding}</span>
        </div>
      </aside>
    </section>
  );
}
