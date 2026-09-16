import { useId, useState } from 'react'
import styles from './MissionFilters.module.css'

export type ContractType = 'Intérim' | 'CDD / CDI' | 'Indépendant' | 'Apprentissage'

export interface MissionFiltersValue {
  keywords: string
  distanceKm: number
  contractTypes: ContractType[]
  minHourlyRate: number
}

export interface MissionFiltersProps {
  onChange?: (value: MissionFiltersValue) => void
}

const CONTRACT_TYPES: ContractType[] = [
  'Intérim',
  'CDD / CDI',
  'Indépendant',
  'Apprentissage',
]
const RATE_OPTIONS = [15, 18, 20, 25]
const MIN_DISTANCE = 5
const MAX_DISTANCE = 50

const DEFAULT_VALUE: MissionFiltersValue = {
  keywords: '',
  distanceKm: 20,
  contractTypes: [],
  minHourlyRate: 15,
}

function formatRate(rate: number) {
  return rate === RATE_OPTIONS[RATE_OPTIONS.length - 1] ? `${rate}€/h+` : `${rate}€/h`
}

export function MissionFilters({ onChange }: MissionFiltersProps) {
  const [value, setValue] = useState<MissionFiltersValue>(DEFAULT_VALUE)
  const headingId = useId()
  const keywordsId = useId()
  const distanceId = useId()

  function update(partial: Partial<MissionFiltersValue>) {
    const next = { ...value, ...partial }
    setValue(next)
    onChange?.(next)
  }

  function toggleContractType(type: ContractType) {
    const isSelected = value.contractTypes.includes(type)
    update({
      contractTypes: isSelected
        ? value.contractTypes.filter((t) => t !== type)
        : [...value.contractTypes, type],
    })
  }

  function handleReset() {
    setValue(DEFAULT_VALUE)
    onChange?.(DEFAULT_VALUE)
  }

  return (
    <aside className={styles.panel} aria-labelledby={headingId}>
      <div className={styles.headerRow}>
        <h2 id={headingId} className={styles.heading}>
          <FilterIcon /> Filtres
        </h2>
        <button type="button" className={styles.reset} onClick={handleReset}>
          Réinitialiser
        </button>
      </div>

      <div className={styles.field}>
        <label htmlFor={keywordsId} className={styles.label}>
          Mots-clés
        </label>
        <div className={styles.searchInput}>
          <SearchIcon />
          <input
            id={keywordsId}
            type="text"
            placeholder="Coffreur, Grutier..."
            value={value.keywords}
            onChange={(event) => update({ keywords: event.target.value })}
          />
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.rangeHeader}>
          <label htmlFor={distanceId} className={styles.label}>
            Distance (km)
          </label>
          <span className={styles.rangeValue}>{value.distanceKm} km</span>
        </div>
        <input
          id={distanceId}
          type="range"
          min={MIN_DISTANCE}
          max={MAX_DISTANCE}
          step={5}
          value={value.distanceKm}
          onChange={(event) => update({ distanceKm: Number(event.target.value) })}
          className={styles.slider}
        />
        <div className={styles.rangeLabels}>
          <span>{MIN_DISTANCE} km</span>
          <span>{MAX_DISTANCE} km+</span>
        </div>
      </div>

      <fieldset className={styles.field}>
        <legend className={styles.label}>Type de contrat</legend>
        {CONTRACT_TYPES.map((type) => (
          <label key={type} className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={value.contractTypes.includes(type)}
              onChange={() => toggleContractType(type)}
            />
            {type}
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.field}>
        <legend className={styles.label}>Taux horaire min.</legend>
        <div className={styles.rateGrid}>
          {RATE_OPTIONS.map((rate) => {
            const isActive = value.minHourlyRate === rate
            return (
              <label
                key={rate}
                className={[styles.rateChip, isActive && styles.rateChipActive]
                  .filter(Boolean)
                  .join(' ')}
              >
                <input
                  type="radio"
                  name="minHourlyRate"
                  className={styles.hiddenInput}
                  checked={isActive}
                  onChange={() => update({ minHourlyRate: rate })}
                />
                {formatRate(rate)}
              </label>
            )
          })}
        </div>
      </fieldset>
    </aside>
  )
}

function FilterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={styles.icon}
    >
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  )
}

function SearchIcon() {
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
      className={styles.icon}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}
