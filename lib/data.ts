import type { Agent, Deliverable } from './types'

export const AGENTS: Agent[] = [
  {
    id: 'maya',
    name: 'Maya',
    role: 'Stratégie & Scripts',
    color: '#00C8FF',
    colorSoft: 'rgba(0,200,255,0.09)',
    status: 'active',
    task: 'Script Hero Shot · 3 versions générées, v2 retenue',
  },
  {
    id: 'alex',
    name: 'Alex',
    role: 'Analyse & Research',
    color: '#FF00AA',
    colorSoft: 'rgba(255,0,170,0.09)',
    status: 'working',
    task: 'Analyse concurrentielle · 12 sources en cours',
  },
  {
    id: 'sam',
    name: 'Sam',
    role: 'Direction artistique',
    color: '#8B00FF',
    colorSoft: 'rgba(139,0,255,0.09)',
    status: 'idle',
    task: 'En attente — Moodboard phase 01',
  },
  {
    id: 'leo',
    name: 'Léo',
    role: 'Distribution',
    color: '#B0B8C9',
    colorSoft: 'rgba(176,184,201,0.08)',
    status: 'idle',
    task: 'En attente — Plan de distribution',
  },
]

export const DELIVERABLES: Deliverable[] = [
  { id: 'd1', name: 'Brief client analysé', status: 'done', agent: 'maya', meta: 'Maya · 2h' },
  { id: 'd2', name: 'Audiences & personas définis', status: 'done', agent: 'alex', meta: 'Alex · 45 min' },
  { id: 'd3', name: 'Scripts vidéo (4/6 validés)', status: 'wip', agent: 'maya', meta: 'Maya · en cours' },
  { id: 'd4', name: 'Analyse concurrentielle', status: 'wip', agent: 'alex', meta: 'Alex · en cours' },
  { id: 'd5', name: 'Moodboard visuel', status: 'wait', agent: 'sam', meta: 'Sam · en attente' },
  { id: 'd6', name: 'Validation client', status: 'wait', agent: null, meta: 'J–12' },
]

export const PHASES = [
  { id: 'conception', num: '01', label: 'Conception' },
  { id: 'tournage', num: '02', label: 'Tournage' },
  { id: 'postprod', num: '03', label: 'Post-prod' },
  { id: 'distribution', num: '04', label: 'Distribution' },
] as const
