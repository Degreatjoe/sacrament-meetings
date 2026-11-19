import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import PrintButton from "@/components/PrintButton";
import { getServerApiUrl } from "@/lib/server-api";
import type { SacramentMeeting } from "@/lib/types";
import Loading from "../loading";

export default function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <MeetingDetailContent params={params} />
    </Suspense>
  );
}

async function MeetingDetailContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    await getServerApiUrl(`/api/meetings/${encodeURIComponent(id)}`),
    { cache: "no-store" },
  );
  if (response.status === 400 || response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error(`Unable to load meeting ${id}: ${response.status}`);
  }

  const meeting: SacramentMeeting = await response.json();

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
