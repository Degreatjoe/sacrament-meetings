import Link from "next/link";
import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/Footer";
import { getCurrentMeeting } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export default function Home() {
  const meeting: SacramentMeeting = getCurrentMeeting();

  return (
    <>
      <Header />
      <NavLinks />
      <main className="site-main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Sunday {meeting.meetingType} Meeting</p>
            <h1>Prepare to worship,<br />reflect, and renew.</h1>
            <p className="hero-text">Find the agenda and announcements for this week&apos;s sacrament meeting.</p>
            <div className="hero-actions">
              <Link className="primary-button" href={`/meetings/${meeting.id}`}>View this week&apos;s program</Link>
              <Link className="secondary-button" href="/meetings">Browse all meetings</Link>
            </div>
          </div>
          <aside className="hero-card">
            <p>Today&apos;s theme</p>
            <h2>{meeting.meetingType[0].toUpperCase()}{meeting.meetingType.slice(1)} Meeting</h2>
            <span>Presiding: {meeting.presiding}</span>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
