import type { ReactNode } from 'react'
import styles from './StatCard.module.css'

export type StatTrendTone = 'positive' | 'neutral'

export interface StatTrend {
  label: string
  tone?: StatTrendTone
}

export interface StatCardProps {
  /** Icône décorative (le sens est déjà porté par `label`) */
  icon: ReactNode
  label: string
  value: string
  trend?: StatTrend
}

export function StatCard({ icon, label, value, trend }: StatCardProps) {
  const tone = trend?.tone ?? 'neutral'

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.iconBadge} aria-hidden="true">
          {icon}
        </span>
      </div>
      <p className={styles.value}>{value}</p>
      {trend && (
        <p className={[styles.trend, styles[tone]].join(' ')}>
          {tone === 'positive' && <TrendUpIcon />}
          {trend.label}
        </p>
      )}
    </li>
  )
}

function TrendUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={styles.trendIcon}
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  )
}
