import type { AgentId } from '@/lib/types'

interface Props {
  id: AgentId
  size?: number
}

export function AgentIllo({ id, size = 36 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {id === 'maya' && <MayaIllo />}
      {id === 'alex' && <AlexIllo />}
      {id === 'sam' && <SamIllo />}
      {id === 'leo' && <LeoIllo />}
    </svg>
  )
}

function MayaIllo() {
  return (
    <>
      <rect width="36" height="36" rx="8" fill="rgba(0,200,255,0.12)" />
      <rect x="10" y="22" width="16" height="10" rx="3" fill="#00C8FF" opacity=".18" />
      <ellipse cx="18" cy="16" rx="7" ry="7.5" fill="#00C8FF" opacity=".25" />
      <ellipse cx="15.5" cy="15.5" rx="1.5" ry="1.5" fill="#00C8FF" />
      <ellipse cx="20.5" cy="15.5" rx="1.5" ry="1.5" fill="#00C8FF" />
      <path d="M15 19c0 0 1.5 1.5 3 0" stroke="#00C8FF" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 8l1 2.5-1.5-.5 1 2" stroke="#00C8FF" strokeWidth=".8" strokeLinecap="round" opacity=".7" />
    </>
  )
}

function AlexIllo() {
  return (
    <>
      <rect width="36" height="36" rx="8" fill="rgba(255,0,170,0.12)" />
      <rect x="10" y="22" width="16" height="10" rx="3" fill="#FF00AA" opacity=".18" />
      <ellipse cx="18" cy="16" rx="7" ry="7.5" fill="#FF00AA" opacity=".25" />
      <circle cx="15.5" cy="15.5" r="2.5" stroke="#FF00AA" strokeWidth="1" />
      <circle cx="20.5" cy="15.5" r="2.5" stroke="#FF00AA" strokeWidth="1" />
      <path d="M13 15.5h-1.5M23 15.5h1.5M18 15.5h1" stroke="#FF00AA" strokeWidth=".8" />
      <circle cx="15.5" cy="15.5" r="1" fill="#FF00AA" />
      <circle cx="20.5" cy="15.5" r="1" fill="#FF00AA" />
      <path d="M15.5 19.5h5" stroke="#FF00AA" strokeWidth=".9" strokeLinecap="round" />
    </>
  )
}

function SamIllo() {
  return (
    <>
      <rect width="36" height="36" rx="8" fill="rgba(139,0,255,0.12)" />
      <rect x="10" y="22" width="16" height="10" rx="3" fill="#8B00FF" opacity=".18" />
      <ellipse cx="18" cy="16" rx="7" ry="7.5" fill="#8B00FF" opacity=".25" />
      <path d="M11 15 Q11 8 18 8 Q25 8 25 15" fill="#8B00FF" opacity=".3" />
      <ellipse cx="15.5" cy="15.5" rx="1.8" ry="2" fill="#8B00FF" />
      <ellipse cx="20.5" cy="15.5" rx="1.8" ry="2" fill="#8B00FF" />
      <circle cx="16.2" cy="14.8" r=".5" fill="rgba(255,255,255,0.7)" />
      <circle cx="21.2" cy="14.8" r=".5" fill="rgba(255,255,255,0.7)" />
      <path d="M15 19c0 0 1.5 2 3 0" stroke="#8B00FF" strokeWidth="1.1" strokeLinecap="round" />
    </>
  )
}

function LeoIllo() {
  return (
    <>
      <rect width="36" height="36" rx="8" fill="rgba(176,184,201,0.1)" />
      <rect x="10" y="22" width="16" height="10" rx="3" fill="#B0B8C9" opacity=".18" />
      <ellipse cx="18" cy="16" rx="7" ry="7.5" fill="#B0B8C9" opacity=".25" />
      <ellipse cx="15.5" cy="15.5" rx="1.4" ry="1.4" fill="#B0B8C9" />
      <ellipse cx="20.5" cy="15.5" rx="1.4" ry="1.4" fill="#B0B8C9" />
      <path d="M15.5 19c0 0 1.2 1 2.5 0" stroke="#B0B8C9" strokeWidth=".9" strokeLinecap="round" />
      <path d="M10 7 Q13 5 18 5 Q23 5 26 7" stroke="#B0B8C9" strokeWidth=".8" opacity=".5" />
      <path d="M12 9 Q14.5 7.5 18 7.5 Q21.5 7.5 24 9" stroke="#B0B8C9" strokeWidth=".8" opacity=".7" />
      <circle cx="18" cy="10" r=".8" fill="#B0B8C9" opacity=".6" />
    </>
  )
}
