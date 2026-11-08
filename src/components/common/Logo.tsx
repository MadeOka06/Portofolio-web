interface LogoProps {
  size?: number | string;
  className?: string;
  showBadge?: boolean;
}

export function Logo({ size = 32, className = '', showBadge = true }: LogoProps) {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Oka Darmestha"
    >
      {showBadge && (
        <>
          <rect width="120" height="120" rx="26" fill="#121212" />
          <rect
            x="1.5"
            y="1.5"
            width="117"
            height="117"
            rx="24.5"
            fill="none"
            stroke="#262626"
            strokeWidth="1.5"
          />
        </>
      )}

      {/* Monogram OD */}
      <g
        fill="none"
        stroke="#F5F3EC"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Letter O */}
        <ellipse cx="44" cy="60" rx="19" ry="22" strokeWidth="8.5" />

        {/* Letter D */}
        <path d="M 64 38 V 82" strokeWidth="8.5" />
        <path
          d="M 64 38 C 84 38 89 48 89 60 C 89 72 84 82 64 82"
          strokeWidth="8.5"
        />
      </g>

      {/* Swiss Vermilion Accent Dot */}
      <circle cx="89" cy="36" r="4.5" fill="#D84227" />
    </svg>
  );
}

export default Logo;
