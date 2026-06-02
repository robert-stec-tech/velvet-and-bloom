export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
        {/* TODO: about / social links */}
        <p>© {new Date().getFullYear()} Velvet &amp; Bloom</p>
      </div>
    </footer>
  );
}
