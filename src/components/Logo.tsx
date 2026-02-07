interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* White circle background */}
      <circle cx="40" cy="40" r="38" fill="white" stroke="hsl(242, 40%, 34%)" strokeWidth="2" />
      {/* Green cross */}
      <rect x="36" y="12" width="8" height="20" rx="2" fill="hsl(96, 52%, 50%)" />
      <rect x="28" y="18" width="24" height="8" rx="2" fill="hsl(96, 52%, 50%)" />
      {/* Heartbeat / pulse line */}
      <path
        d="M12 48 L28 48 L32 36 L38 58 L44 30 L50 54 L54 42 L58 48 L68 48"
        stroke="hsl(96, 52%, 50%)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
