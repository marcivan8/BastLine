import type { ReactNode } from 'react'
import styles from './FeatureHighlightGrid.module.css'

export interface FeatureHighlightGridProps {
  /** Une liste de <FeatureHighlight /> */
  children: ReactNode
}

export function FeatureHighlightGrid({ children }: FeatureHighlightGridProps) {
  return <ul className={styles.grid}>{children}</ul>
}
