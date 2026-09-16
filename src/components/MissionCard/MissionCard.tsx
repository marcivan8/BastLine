import { Button } from '../Button'
import { Tag } from '../Tag'
import styles from './MissionCard.module.css'

export interface MissionCardProps {
  /** Titre du poste, en casse normale ("Maçon coffreur") : la majuscule visuelle
   * vient du CSS (text-transform), pas du texte lui-même, pour rester lisible
   * par les lecteurs d'écran qui épellent parfois les mots tout en majuscules. */
  title: string
  company: string
  location: string
  hoursPerWeek: string
  priceRange: string
  /** Laisser vide tant qu'il n'y a pas de vraie photo du chantier : un
   * pictogramme de repli s'affiche automatiquement à la place. */
  imageUrl?: string
  /** Texte alternatif de la photo. Laisser vide si l'image est purement
   * décorative (ex: rendu 3D générique du chantier). */
  imageAlt?: string
  /** Bandeau affiché sur la photo, ex. "Nouveau" */
  ribbonLabel?: string
  matchPercent?: number
  /** Phrase de mise en avant, ex. "Correspond bien à votre recherche" */
  highlight?: string
  tags?: string[]
  postedLabel: string
  onViewDetails?: () => void
}

export function MissionCard({
  title,
  company,
  location,
  hoursPerWeek,
  priceRange,
  imageUrl,
  imageAlt = '',
  ribbonLabel,
  matchPercent,
  highlight,
  tags = [],
  postedLabel,
  onViewDetails,
}: MissionCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt} loading="lazy" className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <ImagePlaceholderIcon />
          </div>
        )}
        {ribbonLabel && <span className={styles.ribbon}>{ribbonLabel}</span>}
        {matchPercent !== undefined && (
          <span className={styles.matchBadge}>
            <StarIcon /> {matchPercent}% match
          </span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.headerRow}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.company}>{company}</p>
          </div>
          <p className={styles.price}>{priceRange}</p>
        </div>

        <ul className={styles.meta}>
          <li>
            <LocationIcon /> {location}
          </li>
          <li>
            <ClockIcon /> {hoursPerWeek}
          </li>
        </ul>

        {highlight && (
          <p className={styles.highlight}>
            <CheckIcon /> {highlight}
          </p>
        )}

        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.footer}>
          <span className={styles.posted}>{postedLabel}</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={onViewDetails}
            aria-label={`Voir le détail de la mission ${title}`}
          >
            Voir le détail <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </article>
  )
}

/* Icônes décoratives : le sens est toujours porté par le texte visible à côté,
 * donc chaque icône est masquée aux lecteurs d'écran (aria-hidden). */

function LocationIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 21s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 5-5" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  )
}

function ImagePlaceholderIcon() {
  return (
    <svg
      className={styles.placeholderIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.75" />
      <path d="M3 17l5-5 4 4 3-3 6 6" />
    </svg>
  )
}
