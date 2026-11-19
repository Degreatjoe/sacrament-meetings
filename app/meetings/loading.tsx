export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-6 py-12" aria-label="Loading meetings">
      <div className="mb-7 border-b border-ward-line pb-5">
        <div className="mb-3 h-3 w-28 rounded bg-ward-line" />
        <div className="h-10 w-80 max-w-full rounded bg-ward-line" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <span className="h-60 rounded border border-ward-line bg-white" />
        <span className="h-60 rounded border border-ward-line bg-white" />
        <span className="h-60 rounded border border-ward-line bg-white" />
      </div>
    </div>
  );
}
