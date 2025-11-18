import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
        <title>Travel & Ask LLC Logo</title>
        <circle cx="50" cy="50" r="50" fill="white" />
        <g transform="translate(0, -10)">
            <g transform="scale(0.8) translate(12.5, 12.5)">
                <path d="M50,5A45,45,0,0,0,14.6,73.7Q18,78,25,80" fill="none" stroke="#001F3F" strokeWidth="5" />
                <path d="M85.4,73.7A45,45,0,0,0,95,50C95,35 87,20 75,10" fill="none" stroke="#001F3F" strokeWidth="5" />
                <path d="M75,10A20,20,0,0,1,80,25" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M14.6,73.7a20,20,0,0,1,-5,-15" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            </g>
            <g transform="scale(0.8) translate(12.5, 12.5)">
                <clipPath id="circleClip">
                    <circle cx="50" cy="50" r="30"/>
                </clipPath>
                <g clipPath="url(#circleClip)">
                    <rect x="20" y="20" width="60" height="60" fill="#FFC300"/>
                    <path d="M20,60 C40,50 60,70 80,60 V80 H20Z" fill="#00A8E8" />
                    <path d="M45,70 C55,65 65,75 75,70" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M60,60 L70,45 L80,60 H60Z" fill="#001F3F" />
                    <path d="M40,60 L55,35 L65,60 H40Z" fill="#3D5A80" />
                    <path d="M30,60 L32,50 L34,60 Z" fill="#001F3F" />
                    <path d="M28,60L30,55L32,60Z" fill="#3D5A80" />
                    <path d="M35,60v-5h-1v-2h-1v-5h1v-1h1v1h1v5h-1v2z" fill="#001F3F"/>
                    <path d="M34,47 l-2,-2 l-1,2 l1,1z" fill="#2E7D32" />
                    <path d="M35,47 l2,-2 l1,2 l-1,1z" fill="#2E7D32" />
                    <path d="M34,49 l-2,2 l-1,-2 l1,-1z" fill="#2E7D32" />
                    <path d="M35,49 l2,2 l1,-2 l-1,-1z" fill="#2E7D32" />

                    <path d="M42,60v-7h-1v-2h-1v-5h1v-1h1v1h1v5h-1v2z" fill="#001F3F"/>
                    <path d="M41,45 l-2,-2 l-1,2 l1,1z" fill="#2E7D32" />
                    <path d="M42,45 l2,-2 l1,2 l-1,1z" fill="#2E7D32" />
                    <path d="M41,47 l-2,2 l-1,-2 l1,-1z" fill="#2E7D32" />
                    <path d="M42,47 l2,2 l-1,-2 l-1,-1z" fill="#2E7D32" />
                    
                    <circle cx="65" cy="35" r="4" fill="#ADD8E6"/>
                    <circle cx="40" cy="38" r="5" fill="#ADD8E6"/>
                </g>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#001F3F" strokeWidth="4"/>
            </g>
            <g transform="translate(68, 18) rotate(30) scale(0.6)">
                <path d="M0,0 l-30,-10 v20z" fill="#001F3F" />
                <path d="M-28,0 l10,20 h10 l-15,-20" fill="#001F3F" />
                <path d="M-28,0 l10,-20 h10 l-15,20" fill="#001F3F" />
                <path d="M-40,0 l-5,4 h30 l5,-4" fill="#001F3F" />
            </g>
        </g>
        <text x="50" y="78" fontFamily="Impact, sans-serif" fontSize="8" textAnchor="middle" fill="#001F3F">
            TRAVEL &amp; ASK<tspan fontSize="4" dy="-2">LLC</tspan>
        </text>
        <text x="50" y="85" fontFamily="Arial, sans-serif" fontSize="3" textAnchor="middle" fill="#001F3F" letterSpacing="0.1">
            EXPLORING THE WORLD,ONE QUESTION AT A TIME
        </text>
        <g transform="translate(25, 90)" fill="#FFC300">
            <path d="M5,0 L6,3.5 10,3.5 7,6 8,10 5,7.5 2,10 3,6 0,3.5 4,3.5Z" />
            <path d="M15,0 L16,3.5 20,3.5 17,6 18,10 15,7.5 12,10 13,6 10,3.5 14,3.5Z" />
            <path d="M25,0 L26,3.5 30,3.5 27,6 28,10 25,7.5 22,10 23,6 20,3.5 24,3.5Z" />
            <path d="M35,0 L36,3.5 40,3.5 37,6 38,10 35,7.5 32,10 33,6 30,3.5 34,3.5Z" />
            <path d="M45,0 L46,3.5 50,3.5 47,6 48,10 45,7.5 42,10 43,6 40,3.5 44,3.5Z" />
        </g>
    </svg>
  );
}
