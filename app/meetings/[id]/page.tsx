import Link from "next/link";
import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import PrintButton from "@/components/PrintButton";
import { getMeetingById } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);
  const meeting: SacramentMeeting | null =
    Number.isInteger(numericId) ? getMeetingById(numericId) : null;
  if (!meeting) notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-7 print:max-w-none print:px-0 print:py-0">
      <div className="mb-5 flex justify-between print:hidden">
        <Link className="text-sm text-ward-muted hover:underline" href="/meetings">← All meetings</Link>
        <PrintButton />
      </div>
      <MeetingDetail meeting={meeting} />
    </section>
  );
}
