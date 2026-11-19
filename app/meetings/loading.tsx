export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-6 py-16" aria-label="Loading meetings">
      <div className="mb-3 h-8 w-72 rounded bg-ward-line" />
      <div className="h-5 w-44 rounded bg-ward-line" />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        <span className="h-60 rounded bg-ward-line" /><span className="h-60 rounded bg-ward-line" /><span className="h-60 rounded bg-ward-line" />
      </div>
    </div>
  );
}
