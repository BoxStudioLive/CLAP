import { DELIVERABLES, PHASES, AGENTS } from '@/lib/data'
import styles from './page.module.css'

const ACTIVITY = [
  { agent: 'Maya', color: '#00C8FF', text: 'Script Hero Shot v2 finalisé — 3 variantes générées', time: '14 min' },
  { agent: 'Alex', color: '#FF00AA', text: 'Rapport concurrentiel · 12 sources indexées', time: '38 min' },
  { agent: 'Maya', color: '#00C8FF', text: 'Brief client analysé · Brief validé', time: '2h' },
  { agent: 'Alex', color: '#FF00AA', text: 'Audiences & personas définis · 4 segments identifiés', time: '3h' },
]

const statusLabel: Record<string, string> = {
  done: 'Validé',
  wip: 'En cours',
  wait: 'En attente',
}

export default function DashboardPage() {
  const doneCount = DELIVERABLES.filter(d => d.status === 'done').length
  const wipCount = DELIVERABLES.filter(d => d.status === 'wip').length
  const progress = Math.round((doneCount / DELIVERABLES.length) * 100)
  const activeAgents = AGENTS.filter(a => a.status !== 'idle').length

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadProject}>BoxStudio Q4 2026</span>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadPage}>Vue d'ensemble</span>
        </div>
        <div className={styles.topActions}>
          <button className={styles.btnAction}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            Nouvelle tâche
          </button>
        </div>
      </div>

      <div className={styles.phases}>
        {PHASES.map((phase) => (
          <div
            key={phase.id}
            className={`${styles.phaseTab} ${phase.id === 'conception' ? styles.phaseActive : ''}`}
          >
            <span className={styles.phaseNum}>{phase.num}</span>
            {phase.label}
          </div>
        ))}
      </div>

      <div className={styles.statsStrip}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{doneCount}/{DELIVERABLES.length}</div>
          <div className={styles.statLabel}>Livrables validés</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statValue}>{wipCount}</div>
          <div className={styles.statLabel}>En cours</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statValue}>{activeAgents}</div>
          <div className={styles.statLabel}>Agents actifs</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statValue}>J–12</div>
          <div className={styles.statLabel}>Validation client</div>
        </div>
        <div className={styles.progressWrap}>
          <div className={styles.progressLabel}>
            <span>Progression</span>
            <span>{progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.deliverables}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Livrables — Phase 01</span>
          </div>
          <div className={styles.delivList}>
            {DELIVERABLES.map((d) => (
              <div key={d.id} className={styles.delivRow}>
                <div className={`${styles.delivStatus} ${styles[`status_${d.status}`]}`}>
                  {d.status === 'done' ? (
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5L3.5 6.5 7.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : d.status === 'wip' ? (
                    <span className={styles.wipDot} />
                  ) : (
                    <span className={styles.waitDot} />
                  )}
                </div>
                <div className={styles.delivInfo}>
                  <div className={styles.delivName}>{d.name}</div>
                  <div className={styles.delivMeta}>{d.meta}</div>
                </div>
                <div className={`${styles.delivBadge} ${styles[`badge_${d.status}`]}`}>
                  {statusLabel[d.status]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.activity}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Activité récente</span>
          </div>
          <div className={styles.activityList}>
            {ACTIVITY.map((a, i) => (
              <div key={i} className={styles.activityRow}>
                <div className={styles.activityDot} style={{ background: a.color, boxShadow: `0 0 5px ${a.color}` }} />
                <div className={styles.activityContent}>
                  <span className={styles.activityAgent} style={{ color: a.color }}>{a.agent}</span>
                  {' '}
                  <span className={styles.activityText}>{a.text}</span>
                </div>
                <div className={styles.activityTime}>{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
