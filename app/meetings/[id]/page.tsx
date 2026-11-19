import Link from "next/link";
import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ print?: string }>;
}) {
  const { id } = await params;
  const { print } = await searchParams;
  const numericId = Number(id);
  const meeting: SacramentMeeting | null =
    Number.isInteger(numericId) ? getMeetingById(numericId) : null;
  if (!meeting) notFound();

  return (
    <section className={print === "true" ? "detail-page print-mode" : "detail-page"}>
      <div className="detail-actions no-print">
        <Link className="back-link" href="/meetings">← All meetings</Link>
        <Link className="print-button" href={`?print=true`}>Print agenda</Link>
      </div>
      <MeetingDetail meeting={meeting} />
    </section>
  );
}
