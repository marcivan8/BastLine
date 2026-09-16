import type { ReactNode } from 'react'
import styles from './FeatureHighlight.module.css'

export interface FeatureHighlightProps {
  icon: ReactNode
  title: string
  description: string
  /** Niveau de titre HTML à utiliser pour `title`. À adapter selon le
   * contexte de la page (ex: h3 sous un h2 de section, h2 si le bloc est
   * autonome) pour garder une hiérarchie de titres cohérente (RGAA 9.1). */
  headingLevel?: 'h2' | 'h3' | 'h4'
}

export function FeatureHighlight({
  icon,
  title,
  description,
  headingLevel = 'h3',
}: FeatureHighlightProps) {
  const Heading = headingLevel

  return (
    <li className={styles.item}>
      <span className={styles.iconBadge} aria-hidden="true">
        {icon}
      </span>
      <Heading className={styles.title}>{title}</Heading>
      <p className={styles.description}>{description}</p>
    </li>
  )
}
