'use client'

import { useState } from 'react'
import Link from 'next/link'

const competitors = [
  { name: 'Mailchimp', url: 'https://mailchimp.com', angle: 0 },
  { name: 'Klaviyo', url: 'https://klaviyo.com', angle: 40 },
  { name: 'ActiveCampaign', url: 'https://activecampaign.com', angle: 80 },
  { name: 'Constant Contact', url: 'https://constantcontact.com', angle: 120 },
  { name: 'GetResponse', url: 'https://getresponse.com', angle: 160 },
  { name: 'MailerLite', url: 'https://mailerlite.com', angle: 200 },
  { name: 'AWeber', url: 'https://aweber.com', angle: 240 },
  { name: 'HubSpot', url: 'https://hubspot.com', angle: 280 },
  { name: 'ConvertKit', url: 'https://kit.com', angle: 320 },
]

const ORBIT_RADIUS = 180
const CENTER_X = 260
const CENTER_Y = 260

function getPosition(angle: number) {
  const rad = (angle * Math.PI) / 180
  return {
    x: CENTER_X + ORBIT_RADIUS * Math.cos(rad),
    y: CENTER_Y + ORBIT_RADIUS * Math.sin(rad),
  }
}

export default function CompetitorOrbit() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <div style={{ position: 'relative', width: '520px', height: '520px', maxWidth: '100%' }}>
        {/* Faint Brevo watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '96px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            color: '#FFD14F',
            opacity: 0.04,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          BREVO
        </div>

        {/* SVG: orbit ring + lines */}
        <svg
          viewBox="0 0 520 520"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
        >
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={ORBIT_RADIUS}
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeDasharray="6,6"
          />
          {competitors.map((c) => {
            const pos = getPosition(c.angle)
            return (
              <line
                key={c.name}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={pos.x}
                y2={pos.y}
                stroke={hovered === c.name ? '#FFD14F' : '#1E1E1E'}
                strokeWidth="1"
                strokeDasharray="4,4"
                style={{ transition: 'stroke 0.2s' }}
              />
            )
          })}
        </svg>

        {/* Center Brevo circle */}
        <a
          href="https://www.brevo.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            left: CENTER_X,
            top: CENTER_Y,
            transform: 'translate(-50%, -50%)',
            width: '96px',
            height: '96px',
            background: '#FFD14F',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            textDecoration: 'none',
            boxShadow: '0 0 0 8px rgba(255,209,79,0.12)',
          }}
        >
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1A1200', fontSize: '18px' }}>
            Brevo
          </span>
        </a>

        {/* Competitor labels */}
        {competitors.map((c) => {
          const pos = getPosition(c.angle)
          const isHovered = hovered === c.name
          return (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
                background: isHovered ? 'rgba(255,209,79,0.15)' : '#111111',
                border: `1px solid ${isHovered ? 'rgba(255,209,79,0.4)' : '#1E1E1E'}`,
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
                color: isHovered ? '#FFD14F' : '#9ca3af',
                textDecoration: 'none',
                zIndex: 5,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {c.name}
            </a>
          )
        })}
      </div>

      <a
        href="/category/brevo-vs-competitors"
        style={{
          background: 'transparent',
          border: '1px solid #FFD14F',
          color: '#FFD14F',
          padding: '0.65rem 1.75rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        Read All Comparison Guides
      </a>
    </div>
  )
}
