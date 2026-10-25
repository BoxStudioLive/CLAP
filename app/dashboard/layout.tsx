import { Sidebar } from '@/components/Sidebar'
import { AgentPanel } from '@/components/AgentPanel'
import styles from './layout.module.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      <AgentPanel />
    </div>
  )
}
