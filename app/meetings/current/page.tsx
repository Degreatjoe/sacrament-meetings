import { Suspense } from "react";
import { connection } from "next/server";
import { redirect, RedirectType } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  return (
    <Suspense
      fallback={
        <p className="mx-auto max-w-6xl px-6 py-12 text-ward-muted" role="status">
          Finding this Sunday&apos;s meeting…
        </p>
      }
    >
      <CurrentMeetingRedirect />
    </Suspense>
  );
}

async function CurrentMeetingRedirect() {
  await connection();

  const timezone = "America/Los_Angeles";
  const localDateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const getPart = (type: Intl.DateTimeFormatPartTypes): number => {
    const value = localDateParts.find((part) => part.type === type)?.value;
    if (!value) {
      throw new Error(`Unable to determine ${type} in ${timezone}`);
    }
    return Number(value);
  };
  const localDate = new Date(
    Date.UTC(getPart("year"), getPart("month") - 1, getPart("day")),
  );
  localDate.setUTCDate(localDate.getUTCDate() - localDate.getUTCDay());
  const date = [
    localDate.getUTCFullYear(),
    String(localDate.getUTCMonth() + 1).padStart(2, "0"),
    String(localDate.getUTCDate()).padStart(2, "0"),
  ].join("-");
  const meeting = getMeetings(date)[0];

  if (!meeting) {
    return redirect("/meetings", RedirectType.replace);
  }

  return redirect(`/meetings/${meeting.id}`, RedirectType.replace);
}
