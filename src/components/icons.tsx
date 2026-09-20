type IconProps = { className?: string };

const base = "h-6 w-6";

export function ReceiptIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path d="M5 3.5h14v17l-2.3-1.4-2.4 1.4-2.3-1.4-2.4 1.4L7.3 19 5 20.5z" strokeLinejoin="round" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function CarIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path d="M3.5 16v-3.2l1.8-4.4A2 2 0 0 1 7.2 7h9.6a2 2 0 0 1 1.9 1.4l1.8 4.4V16" strokeLinejoin="round" />
      <path d="M3.5 16h17M6 16v2H4.2A.7.7 0 0 1 3.5 17.3V16m14.5 0v2h1.8a.7.7 0 0 0 .7-.7V16" strokeLinejoin="round" />
      <path d="M5.6 12.6h12.8" strokeLinecap="round" />
      <circle cx="7.6" cy="14.3" r=".9" fill="currentColor" stroke="none" />
      <circle cx="16.4" cy="14.3" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TruckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path d="M2.5 6.5h11v10h-11z" strokeLinejoin="round" />
      <path d="M13.5 9.5h3.7l3.3 3.3v3.7h-7z" strokeLinejoin="round" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function KeyIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12h9M18 12v3M15 12v2.2" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <circle cx="9.5" cy="9" r="3" />
      <path d="M4 18.5c0-2.5 2.5-4.2 5.5-4.2s5.5 1.7 5.5 4.2" strokeLinecap="round" />
      <path d="M16 7.4a2.8 2.8 0 0 1 0 5.4m1 1.9c2 .5 3.5 1.9 3.5 3.8" strokeLinecap="round" />
    </svg>
  );
}

export function BoxIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path d="M12 3.2 20 7v10l-8 3.8L4 17V7z" strokeLinejoin="round" />
      <path d="M4 7l8 3.8L20 7M12 10.8v10" strokeLinejoin="round" />
    </svg>
  );
}

export function UploadIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path d="M12 16V5.5m0 0L8.2 9.3M12 5.5l3.8 3.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 15v2.8a1.7 1.7 0 0 0 1.7 1.7h11.6a1.7 1.7 0 0 0 1.7-1.7V15" strokeLinecap="round" />
    </svg>
  );
}

export function MatchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M10 7h4a3 3 0 0 1 3 3v4M7 10v4a3 3 0 0 0 3 3h4" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path d="M12 3.2 19 6v5.4c0 4.1-2.8 7.4-7 9.4-4.2-2-7-5.3-7-9.4V6z" strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15.4 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M5 12h13m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
