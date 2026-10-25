'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Onboarding.module.css'

type Step = 1 | 2 | 3

const BRAND_MOCK = {
  name: 'BoxStudio',
  tagline: 'Production vidéo premium',
  colors: ['#00C8FF', '#8B00FF', '#FF00AA'],
  audience: 'B2B · Entreprises 50–500 salariés',
  tone: 'Premium · Innovant · Direct',
}

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState<Step>(1)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep(2)
    }, 1800)
  }

  function handleConfirm() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep(3)
    }, 1200)
  }

  function handleLaunch() {
    router.push('/dashboard')
  }

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>C</div>
          <div>
            <div className={styles.logoName}>CLAP</div>
            <div className={styles.logoSub}>Studio by BoxStudio</div>
          </div>
        </div>

        <div className={styles.steps}>
          {([1, 2, 3] as Step[]).map((n) => (
            <div key={n} className={`${styles.stepDot} ${step >= n ? styles.stepActive : ''} ${step > n ? styles.stepDone : ''}`}>
              {step > n ? (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5 6.5 2" stroke="#0D0D1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : n}
            </div>
          ))}
          <div className={styles.stepLine} />
        </div>

        {step === 1 && (
          <div className={styles.panel}>
            <h1 className={styles.title}>Analysez votre marque</h1>
            <p className={styles.sub}>Collez l'URL de votre site client. Les agents CLAP extraient automatiquement votre charte graphique et vos audiences.</p>
            <form onSubmit={handleAnalyze} className={styles.urlForm}>
              <div className={styles.urlField}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.urlIcon}>
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1"/>
                  <path d="M1.5 7h11M7 1.5C5.5 3 4.5 5 4.5 7s1 4 2.5 5.5M7 1.5C8.5 3 9.5 5 9.5 7s-1 4-2.5 5.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
                <input
                  type="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="https://votre-client.com"
                  autoFocus
                  required
                />
              </div>
              <button type="submit" className={styles.btnPrimary} disabled={loading}>
                {loading ? (
                  <span className={styles.loader} />
                ) : (
                  <>Analyser la marque <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></>
                )}
              </button>
            </form>
            <p className={styles.hint}>Aucune donnée n'est stockée sans votre accord.</p>
          </div>
        )}

        {step === 2 && (
          <div className={styles.panel}>
            <h1 className={styles.title}>Marque détectée</h1>
            <p className={styles.sub}>Vérifiez les informations extraites et confirmez pour initialiser votre projet.</p>
            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <div className={styles.brandAvatar}>{BRAND_MOCK.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className={styles.brandName}>{BRAND_MOCK.name}</div>
                  <div className={styles.brandTagline}>{BRAND_MOCK.tagline}</div>
                </div>
              </div>
              <div className={styles.brandRows}>
                <div className={styles.brandRow}>
                  <span className={styles.brandLabel}>Couleurs</span>
                  <div className={styles.swatches}>
                    {BRAND_MOCK.colors.map(c => (
                      <span key={c} className={styles.swatch} style={{ background: c }} />
                    ))}
                  </div>
                </div>
                <div className={styles.brandRow}>
                  <span className={styles.brandLabel}>Audience</span>
                  <span className={styles.brandValue}>{BRAND_MOCK.audience}</span>
                </div>
                <div className={styles.brandRow}>
                  <span className={styles.brandLabel}>Ton</span>
                  <span className={styles.brandValue}>{BRAND_MOCK.tone}</span>
                </div>
              </div>
            </div>
            <div className={styles.btnRow}>
              <button className={styles.btnSecondary} onClick={() => setStep(1)}>Modifier</button>
              <button className={styles.btnPrimary} onClick={handleConfirm} disabled={loading}>
                {loading ? <span className={styles.loader} /> : 'Confirmer et créer le projet'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.panel}>
            <div className={styles.successIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#00C8FF" strokeWidth="1.5"/>
                <path d="M8 14.5L11.5 18 20 10" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className={styles.title}>Projet créé !</h1>
            <p className={styles.sub}>Vos 4 agents IA sont briefés sur la marque <strong>{BRAND_MOCK.name}</strong>. Maya commence l'analyse stratégique.</p>
            <div className={styles.agentsReady}>
              {[
                { name: 'Maya', role: 'Stratégie', color: '#00C8FF', status: 'Prête' },
                { name: 'Alex', role: 'Recherche', color: '#FF00AA', status: 'Prêt' },
                { name: 'Sam', role: 'Direction artistique', color: '#8B00FF', status: 'En attente' },
                { name: 'Léo', role: 'Distribution', color: '#B0B8C9', status: 'En attente' },
              ].map(a => (
                <div key={a.name} className={styles.agentRow}>
                  <span className={styles.agentDot} style={{ background: a.color, boxShadow: `0 0 6px ${a.color}` }} />
                  <span className={styles.agentName}>{a.name}</span>
                  <span className={styles.agentRole}>{a.role}</span>
                  <span className={styles.agentStatus}>{a.status}</span>
                </div>
              ))}
            </div>
            <button className={styles.btnPrimary} onClick={handleLaunch}>
              Ouvrir le dashboard <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
