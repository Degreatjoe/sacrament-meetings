import { Suspense } from "react";
import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense
        fallback={
          <nav className="flex min-h-12 justify-center gap-8 bg-ward-green text-white" aria-label="Main navigation">
            <span className="grid place-items-center px-2 text-sm">Home</span>
            <span className="grid place-items-center px-2 text-sm">All Meetings</span>
            <span className="grid place-items-center px-2 text-sm">Current Sunday</span>
          </nav>
        }
      >
        <NavLinks />
      </Suspense>
      <Suspense fallback={<div className="min-h-24" aria-label="Loading meeting content" />}>
        {children}
      </Suspense>
    </>
  );
}
