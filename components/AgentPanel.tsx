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
        <div className={styles.inputRow}>
          <input type="text" placeholder="Parler à Maya…" />
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
