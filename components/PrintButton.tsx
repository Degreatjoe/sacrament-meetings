"use client";

export default function PrintButton() {
  return (
    <button
      className="rounded border border-ward-line bg-white px-4 py-2 text-sm hover:bg-background"
      onClick={() => window.print()}
      type="button"
    >
      Print agenda
    </button>
  );
}
