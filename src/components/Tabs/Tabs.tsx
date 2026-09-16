import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import styles from './Tabs.module.css'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  /** Nom du groupe d'onglets pour les technologies d'assistance, ex.
   * "Sections du tableau de bord" (jamais visible à l'écran). */
  label: string
  items: TabItem[]
  defaultTabId?: string
}

/**
 * Implémente le pattern WAI-ARIA "Tabs" (activation automatique) :
 * - un seul onglet est dans l'ordre de tabulation à la fois (tabIndex roulant) ;
 * - les flèches gauche/droite déplacent le focus ET activent l'onglet ciblé ;
 * - chaque panneau est lié à son onglet par aria-controls / aria-labelledby.
 * Référence : https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
export function Tabs({ label, items, defaultTabId }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? items[0]?.id)
  const uid = useId()
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  function activate(id: string) {
    setActiveId(id)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % items.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + items.length) % items.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = items.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      const nextItem = items[nextIndex]
      activate(nextItem.id)
      tabRefs.current[nextItem.id]?.focus()
    }
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className={styles.tablist}>
        {items.map((item, index) => {
          const selected = item.id === activeId
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className={[styles.tab, selected && styles.tabActive].filter(Boolean).join(' ')}
              onClick={() => activate(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${uid}-panel-${item.id}`}
          aria-labelledby={`${uid}-tab-${item.id}`}
          hidden={item.id !== activeId}
          className={styles.panel}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
