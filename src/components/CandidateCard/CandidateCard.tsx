import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { ClockIcon, LocationIcon, StarIcon } from '../icons'
import { StatusBadge, type StatusTone } from '../StatusBadge'
import { Tag } from '../Tag'
import styles from './CandidateCard.module.css'

export interface CandidateAvailability {
  label: string
  tone: StatusTone
}

export interface CandidateCardProps {
  name: string
  jobTitle: string
  location: string
  experience: string
  avatarUrl?: string
  /** Note sur 5, ex. 4.9 */
  rating?: number
  availability: CandidateAvailability
  skills: string[]
  onViewProfile?: () => void
  onContact?: () => void
}

const MAX_VISIBLE_SKILLS = 3

export function CandidateCard({
  name,
  jobTitle,
  location,
  experience,
  avatarUrl,
  rating,
  availability,
  skills,
  onViewProfile,
  onContact,
}: CandidateCardProps) {
  const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS)
  const hiddenCount = skills.length - visibleSkills.length

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <Avatar name={name} src={avatarUrl} size="md" statusTone={availability.tone} />
        {rating !== undefined && (
          <span className={styles.rating}>
            <StarIcon className={styles.icon} /> {rating.toFixed(1)}
          </span>
        )}
      </div>

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.jobTitle}>{jobTitle}</p>

      <ul className={styles.meta}>
        <li>
          <LocationIcon className={styles.icon} /> {location}
        </li>
        <li>
          <ClockIcon className={styles.icon} /> {experience}
        </li>
      </ul>

      <StatusBadge label={availability.label} tone={availability.tone} withDot />

      {skills.length > 0 && (
        <ul className={styles.skills}>
          {visibleSkills.map((skill) => (
            <li key={skill}>
              <Tag>{skill}</Tag>
            </li>
          ))}
          {hiddenCount > 0 && (
            <li>
              <Tag>
                <span aria-hidden="true">+{hiddenCount}</span>
                <span className={styles.srOnly}>
                  {' '}
                  et {hiddenCount} compétence{hiddenCount > 1 ? 's' : ''} supplémentaire
                  {hiddenCount > 1 ? 's' : ''}
                </span>
              </Tag>
            </li>
          )}
        </ul>
      )}

      <div className={styles.actions}>
        <Button
          variant="secondary"
          size="sm"
          onClick={onViewProfile}
          aria-label={`Voir le profil de ${name}`}
        >
          Voir profil
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={onContact}
          aria-label={`Contacter ${name}`}
        >
          Contacter
        </Button>
      </div>
    </article>
  )
}
