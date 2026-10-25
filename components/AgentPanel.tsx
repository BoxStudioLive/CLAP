import { AGENTS } from '@/lib/data'
import { AgentIllo } from './AgentIllo'
import styles from './AgentPanel.module.css'

export function AgentPanel() {
  const activeCount = AGENTS.filter(a => a.status !== 'idle').length

  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        Agents — {activeCount} actifs
      </div>

      <div className={styles.list}>
        {AGENTS.map((agent) => (
          <div
            key={agent.id}
            className={`${styles.card} ${agent.status === 'active' ? styles.cardActive : ''}`}
          >
            <div className={styles.top}>
              <div className={styles.illo}>
                <AgentIllo id={agent.id} size={36} />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{agent.name}</div>
                <div className={styles.role}>{agent.role}</div>
              </div>
            </div>
            <div className={styles.statusRow}>
              <span
                className={styles.dot}
                style={{
                  background: agent.status === 'idle' ? 'rgba(176,184,201,0.35)' : agent.color,
                  boxShadow: agent.status !== 'idle' ? `0 0 5px ${agent.color}` : 'none',
                }}
              />
              <span
                className={styles.task}
                style={{ color: agent.status === 'idle' ? 'var(--fg-dim)' : 'var(--fg-muted)' }}
              >
                {agent.task}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.input}>
        <div className={styles.quota}>
          <span className={styles.quotaDot} />
          <span className={styles.quotaText}>47 requêtes vocales restantes</span>
        </div>
        <div className={styles.inputRow}>
          <input type="text" placeholder="Parler à Maya…" />
          <button className={styles.mic} aria-label="Dicter">
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
              <rect x="3.5" y="1" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 7.5C1 10.5 10 10.5 10 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="5.5" y1="11" x2="5.5" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="3.5" y1="13" x2="7.5" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className={styles.send} aria-label="Envoyer">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M1 8L8 4.5 1 1v3l5 .5-5 .5V8z" fill="#0D0D1A" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
