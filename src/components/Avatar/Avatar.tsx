import type { StatusTone } from '../StatusBadge'
import styles from './Avatar.module.css'

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps {
  src?: string
  /** Nom complet de la personne : sert à générer les initiales de repli
   * quand il n'y a pas de photo. */
  name: string
  size?: AvatarSize
  /** Pastille de statut (disponibilité, en ligne...). Purement visuelle :
   * l'information doit toujours être répétée en texte ailleurs, par
   * exemple via <StatusBadge>. */
  statusTone?: StatusTone
  /** Laisser vide (défaut) si le nom est déjà affiché juste à côté de la
   * photo : l'image est alors décorative pour un lecteur d'écran. */
  alt?: string
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

export function Avatar({ src, name, size = 'md', statusTone, alt = '' }: AvatarProps) {
  return (
    <span className={[styles.avatar, styles[size]].join(' ')}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.initials} aria-hidden="true">
          {getInitials(name)}
        </span>
      )}
      {statusTone && (
        <span
          className={[styles.status, styles[statusTone]].join(' ')}
          aria-hidden="true"
        />
      )}
    </span>
  )
}
