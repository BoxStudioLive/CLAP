'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const navItems = [
  {
    section: 'Workspace',
    items: [
      { href: '/dashboard', label: 'Vue d\'ensemble', icon: 'grid' },
      { href: '/dashboard/timeline', label: 'Timeline', icon: 'clock' },
      { href: '/dashboard/scripts', label: 'Scripts', icon: 'list' },
      { href: '/dashboard/assets', label: 'Assets', icon: 'folder' },
    ],
  },
  {
    section: 'Production',
    items: [
      { href: '/dashboard/tournage', label: 'Tournage', icon: 'play' },
      { href: '/dashboard/postprod', label: 'Post-prod', icon: 'video' },
      { href: '/dashboard/distribution', label: 'Distribution', icon: 'broadcast' },
    ],
  },
]

function Icon({ name }: { name: string }) {
  switch (name) {
    case 'grid': return (
      <svg viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="4.5" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1"/><rect x="7.5" y="1" width="4.5" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1"/><rect x="1" y="7.5" width="4.5" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" opacity=".4"/><rect x="7.5" y="7.5" width="4.5" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" opacity=".4"/></svg>
    )
    case 'clock': return (
      <svg viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.1"/><path d="M6.5 4v2.5l1.8 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
    )
    case 'list': return (
      <svg viewBox="0 0 13 13" fill="none"><path d="M2 3.5h9M2 6.5h5.5M2 9.5h7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
    )
    case 'folder': return (
      <svg viewBox="0 0 13 13" fill="none"><path d="M2 10V3l4-2 5 2v7l-5 2-4-2z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/></svg>
    )
    case 'play': return (
      <svg viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.1"/><path d="M5 4.5L9 6.5 5 8.5V4.5z" fill="currentColor" opacity=".6"/></svg>
    )
    case 'video': return (
      <svg viewBox="0 0 13 13" fill="none"><rect x="1.5" y="3.5" width="8" height="6" rx=".5" stroke="currentColor" strokeWidth="1.1"/><path d="M9.5 5.5l2-1v5l-2-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
    case 'broadcast': return (
      <svg viewBox="0 0 13 13" fill="none"><path d="M6.5 1c-3 2.5-5 4-5 6a5 5 0 0010 0c0-2-2-3.5-5-6z" stroke="currentColor" strokeWidth="1.1"/></svg>
    )
    default: return null
  }
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>C</div>
        <div>
          <div className={styles.brand}>CLAP</div>
          <div className={styles.sub}>Studio by BoxStudio</div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectLabel}>Projet actif</div>
        <div className={styles.projectName}>BoxStudio Q4 2026</div>
      </div>

      <nav className={styles.nav}>
        {navItems.map((group) => (
          <div key={group.section}>
            <div className={styles.sectionLabel}>{group.section}</div>
            {group.items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${active ? styles.active : ''}`}
                >
                  <span className={styles.navIcon}><Icon name={item.icon} /></span>
                  {item.label}
                  {active && <span className={styles.dot} />}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.avatar}>JA</div>
        <div>
          <div className={styles.userName}>Jeremy A.</div>
          <div className={styles.userRole}>Directeur BoxStudio</div>
        </div>
      </div>
    </aside>
  )
}
