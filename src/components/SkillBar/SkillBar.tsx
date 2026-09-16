import { useId } from 'react'
import styles from './SkillBar.module.css'

export interface SkillBarProps {
  label: string
  /** Pourcentage de maîtrise, de 0 à 100 */
  value: number
}

export function SkillBar({ label, value }: SkillBarProps) {
  const labelId = useId()
  const clamped = Math.max(0, Math.min(100, Math.round(value)))

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span id={labelId} className={styles.label}>
          {label}
        </span>
        <span className={styles.value}>{clamped}%</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={labelId}
      >
        <div className={styles.fill} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}
