import styles from './StatusBadge.module.css'

export type StatusTone = 'success' | 'warning' | 'neutral'

export interface StatusBadgeProps {
  label: string
  tone?: StatusTone
  /** Petit point coloré devant le texte, ex. pour un statut de disponibilité */
  withDot?: boolean
}

/**
 * Étiquette de statut (ex: "Disponible immédiatement", "En cours", "Urgent").
 * Le sens n'est jamais porté par la seule couleur : le texte est toujours
 * visible (RGAA/WCAG 1.4.1, ne pas utiliser la couleur comme unique indice).
 */
export function StatusBadge({ label, tone = 'neutral', withDot = false }: StatusBadgeProps) {
  return (
    <span className={[styles.badge, styles[tone]].join(' ')}>
      {withDot && <span className={styles.dot} aria-hidden="true" />}
      {label}
    </span>
  )
}
