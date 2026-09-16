import type { ReactNode } from 'react'
import styles from './StatGrid.module.css'

export interface StatGridProps {
  /** Une liste de <StatCard /> */
  children: ReactNode
}

/**
 * Aligne plusieurs <StatCard /> en grille responsive. Rendu en <ul> car
 * il s'agit bien, sémantiquement, d'une liste d'indicateurs.
 */
export function StatGrid({ children }: StatGridProps) {
  return <ul className={styles.grid}>{children}</ul>
}
