// Premium TECHORA brand mark — gradient tile with a geometric "T" monogram
// drawn like a circuit trace (rounded solder-pad terminals).
export function LogoMark({ size, gradientId }: { size: number; gradientId: string }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1769ff" />
          <stop offset="0.55" stopColor="#2f7dff" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="40" height="40" rx="12" fill={`url(#${gradientId})`} />
      <rect x="2.8" y="2.8" width="38.4" height="38.4" rx="11.2" stroke="rgba(255,255,255,.32)" strokeWidth="1.4" />
      <path d="M13 16h18" stroke="#fff" strokeWidth="3.8" strokeLinecap="round" />
      <path d="M22 16v14" stroke="#fff" strokeWidth="3.8" strokeLinecap="round" />
    </svg>
  );
}
