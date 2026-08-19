import React from 'react';

export default function BrandLogo({ size = 'normal', light = false }) {
  const isLarge = size === 'large';
  const color = light ? '#FAF5EE' : '#3E2213';
  const creaseColor = light ? '#3E2213' : '#E8CBA3';

  return (
    <div className={`brand-identity-wrap ${isLarge ? 'large' : ''} ${light ? 'light-mode' : ''}`}>
      <svg
        viewBox="0 0 260 70"
        width={isLarge ? "320" : "270"}
        height={isLarge ? "86" : "74"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="11:11 The Coffee Space Logo"
        style={{ display: 'block' }}
      >
        {/* Left Side: Exact Butterfly / Angel Wings with Halo Icon */}
        <g transform="translate(6, 4)" stroke={color} strokeLinecap="round" strokeLinejoin="round">
          {/* Top Floating Halo */}
          <ellipse
            cx="40"
            cy="10"
            rx="11.5"
            ry="4.5"
            strokeWidth="2.4"
            fill="none"
          />

          {/* Symmetrical Butterfly / Angel Wings Body & Outlines */}
          {/* Left Wing Outer Contour & Scallops */}
          <path
            d="M38 31 C33 22, 20 12, 6 12 C4.5 16, 8 20, 10 21 C6 22, 3.5 25, 6 28 C10 32, 16 33, 20 33 C14 36, 12 40, 16 43 C23 45, 33 39, 40 33"
            strokeWidth="2.4"
            fill="none"
          />
          {/* Left Wing Internal Feather Curves */}
          <path d="M10 21 C18 20, 26 23, 31 27" strokeWidth="2.2" />
          <path d="M20 33 C25 32, 30 33, 34 35" strokeWidth="2.2" />

          {/* Right Wing Outer Contour & Scallops */}
          <path
            d="M42 31 C47 22, 60 12, 74 12 C75.5 16, 72 20, 70 21 C74 22, 76.5 25, 74 28 C70 32, 64 33, 60 33 C66 36, 68 40, 64 43 C57 45, 47 39, 40 33"
            strokeWidth="2.4"
            fill="none"
          />
          {/* Right Wing Internal Feather Curves */}
          <path d="M70 21 C62 20, 54 23, 49 27" strokeWidth="2.2" />
          <path d="M60 33 C55 32, 50 33, 46 35" strokeWidth="2.2" />

          {/* Bottom Center Point / V-Tip */}
          <path
            d="M36 34 L40 40 L44 34"
            strokeWidth="2.4"
            fill="none"
          />
        </g>

        {/* Right Side: 11:11 Numerals & Coffee Bean Colon */}
        <g transform="translate(94, 7)" fill={color}>
          {/* First "1" */}
          <path d="M4 8 L13 3 L13 29 L19 29 L19 33 L2 33 L2 29 L8 29 L8 8 L4 10 Z" />

          {/* Second "1" */}
          <path d="M23 8 L32 3 L32 29 L38 29 L38 33 L21 33 L21 29 L27 29 L27 8 L23 10 Z" />

          {/* Colon: Top Coffee Bean */}
          <g transform="translate(44, 13) rotate(16)">
            <ellipse cx="0" cy="0" rx="3.2" ry="4.6" fill={color} />
            <path d="M-0.2 -3.8 C0.6 -1.2, -0.6 1.2, 0.2 3.8" stroke={creaseColor} strokeWidth="1" fill="none" strokeLinecap="round" />
          </g>

          {/* Colon: Bottom Coffee Bean */}
          <g transform="translate(44, 25) rotate(16)">
            <ellipse cx="0" cy="0" rx="3.2" ry="4.6" fill={color} />
            <path d="M-0.2 -3.8 C0.6 -1.2, -0.6 1.2, 0.2 3.8" stroke={creaseColor} strokeWidth="1" fill="none" strokeLinecap="round" />
          </g>

          {/* Third "1" */}
          <path d="M51 8 L60 3 L60 29 L66 29 L66 33 L49 33 L49 29 L55 29 L55 8 L51 10 Z" />

          {/* Fourth "1" */}
          <path d="M70 8 L79 3 L79 29 L85 29 L85 33 L68 33 L68 29 L74 29 L74 8 L70 10 Z" />

          {/* Subtitle: "The Coffee Space" */}
          <text
            x="44"
            y="50"
            fill={color}
            fontFamily="'DM Serif Display', 'Playfair Display', Georgia, serif"
            fontWeight="700"
            fontSize="14.5"
            textAnchor="middle"
            letterSpacing="-0.1px"
          >
            The Coffee Space
          </text>
        </g>
      </svg>
    </div>
  );
}
