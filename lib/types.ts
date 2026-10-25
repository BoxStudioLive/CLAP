export type AgentId = 'maya' | 'alex' | 'sam' | 'leo'
export type AgentStatus = 'active' | 'working' | 'idle'
export type DelivStatus = 'done' | 'wip' | 'wait'
export type Phase = 'conception' | 'tournage' | 'postprod' | 'distribution'

export interface Agent {
  id: AgentId
  name: string
  role: string
  color: string
  colorSoft: string
  status: AgentStatus
  task: string
}

export interface Deliverable {
  id: string
  name: string
  status: DelivStatus
  agent: AgentId | null
  meta: string
}

export interface BrandKit {
  name: string
  url: string
  colors: string[]
  fonts: string[]
  sector: string[]
  voice: string
}
