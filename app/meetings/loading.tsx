export default function Loading() {
  return (
    <div className="loading" aria-label="Loading meetings">
      <div className="loading-line" />
      <div className="loading-line short" />
      <div className="loading-grid">
        <span /><span /><span />
      </div>
    </div>
  );
}
