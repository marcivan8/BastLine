import { Avatar } from './components/Avatar'
import { Button } from './components/Button'
import { CandidateCard } from './components/CandidateCard'
import { FeatureHighlight, FeatureHighlightGrid } from './components/FeatureHighlight'
import { ClockIcon } from './components/icons'
import { MissionCard } from './components/MissionCard'
import { MissionFilters } from './components/MissionFilters'
import { SkillBar } from './components/SkillBar'
import { StatCard } from './components/StatCard'
import { StatGrid } from './components/StatGrid'
import { StatusBadge } from './components/StatusBadge'
import { Tabs } from './components/Tabs'

function App() {
  return (
    <>
      {/* Démo temporaire du composant FeatureHighlight */}
      <section style={{ padding: '24px' }}>
        <h2 style={{ margin: '0 0 16px' }}>Pourquoi choisir BASTLINE ?</h2>
        <FeatureHighlightGrid>
          <FeatureHighlight
            icon={<ShieldIcon />}
            title="Profils Vérifiés"
            description="Chaque candidat sur BASTLINE passe par un processus de vérification rigoureux de ses diplômes et expériences BTP."
          />
          <FeatureHighlight
            icon={<ZapIcon />}
            title="Matching Instantané"
            description="Notre algorithme connecte les missions urgentes aux ouvriers disponibles à proximité en moins de 24 heures."
          />
          <FeatureHighlight
            icon={<ClockIcon />}
            title="Gestion Administrative"
            description="Contrats, facturation et paie : nous gérons toute la paperasse pour vous permettre de rester concentré sur le chantier."
          />
        </FeatureHighlightGrid>
      </section>

      {/* Démo temporaire des composants Avatar + StatusBadge */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          alignItems: 'center',
          padding: '24px 24px 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Avatar name="Thomas Bernard" size="sm" statusTone="success" />
          <Avatar name="Sophie Martin" size="md" statusTone="warning" />
          <Avatar name="Jean Dupont" size="lg" statusTone="success" />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <StatusBadge label="Disponible immédiatement" tone="success" withDot />
          <StatusBadge label="Sous 15 jours" tone="warning" withDot />
          <StatusBadge label="En mission" tone="neutral" withDot />
          <StatusBadge label="En cours" tone="neutral" />
          <StatusBadge label="Urgent" tone="warning" />
        </div>
      </section>

      {/* Démo temporaire du bloc de statistiques */}
      <section style={{ padding: '24px 24px 0' }}>
        <StatGrid>
          <StatCard
            icon={<BriefcaseIcon />}
            label="Candidatures"
            value="8"
            trend={{ label: '+2', tone: 'positive' }}
          />
          <StatCard icon={<CheckIcon />} label="Missions validées" value="2" />
          <StatCard
            icon={<CoinIcon />}
            label="Revenus potentiels"
            value="3 450€"
            trend={{ label: '+12%', tone: 'positive' }}
          />
          <StatCard icon={<StarIcon />} label="Note profil" value="4.9/5" />
        </StatGrid>
      </section>

      {/* Démo temporaire du composant Button, à retirer une fois les vraies pages construites */}
      <section
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          padding: '24px 0',
        }}
      >
        <Button variant="primary">Je cherche une mission</Button>
        <Button variant="secondary">
          Je recrute <span aria-hidden="true">→</span>
        </Button>
        <Button variant="primary" disabled>
          Désactivé
        </Button>
      </section>

      {/* Démo temporaire des composants MissionFilters + MissionCard */}
      <section
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 24px 24px',
        }}
      >
        <MissionFilters
          onChange={(filters) => console.log('Filtres mis à jour', filters)}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <MissionCard
            title="Maçon coffreur"
            company="Vinci Construction"
            location="Saint-Denis"
            hoursPerWeek="39h/sem"
            priceRange="18-22€/h"
            ribbonLabel="Nouveau"
            matchPercent={98}
            highlight="Correspond bien à votre recherche"
            tags={['Niveau N3P2', 'Urgent', 'Panier repas']}
            postedLabel="Posté hier"
            onViewDetails={() => alert('Voir le détail cliqué')}
          />
          <MissionCard
            title="Aide maçon"
            company="Bouygues Construction"
            location="Paris 18ème"
            hoursPerWeek="37h/sem"
            priceRange="13-15€/h"
            matchPercent={85}
            highlight="Idéal pour débuter"
            tags={['Formation incluse', 'Niveau N1']}
            postedLabel="Posté il y a 3 jours"
          />
        </div>
      </section>

      {/* Démo temporaire du composant CandidateCard */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'center',
          padding: '0 24px 24px',
        }}
      >
        <CandidateCard
          name="Marc Lefebvre"
          jobTitle="Électricien BTP qualifié"
          location="Lyon (69)"
          experience="8 ans exp."
          rating={4.9}
          availability={{ label: 'Disponible immédiatement', tone: 'success' }}
          skills={['Câblage industriel', 'Lecture de plans', 'Domotique', 'Norme NF C 15-100']}
          onViewProfile={() => alert('Voir profil cliqué')}
          onContact={() => alert('Contacter cliqué')}
        />
        <CandidateCard
          name="Sophie Martin"
          jobTitle="Conductrice de travaux"
          location="Paris (75)"
          experience="5 ans exp."
          rating={4.7}
          availability={{ label: 'Sous 15 jours', tone: 'warning' }}
          skills={['Gestion de projet', 'Suivi de chantier']}
          onViewProfile={() => alert('Voir profil cliqué')}
          onContact={() => alert('Contacter cliqué')}
        />
        <CandidateCard
          name="Lucas Dubois"
          jobTitle="Ingénieur structure"
          location="Nantes (44)"
          experience="3 ans exp."
          rating={4.5}
          availability={{ label: 'En mission', tone: 'neutral' }}
          skills={['Calcul structure', 'BIM', 'Revit', 'Eurocodes']}
          onViewProfile={() => alert('Voir profil cliqué')}
          onContact={() => alert('Contacter cliqué')}
        />
      </section>

      {/* Démo temporaire du composant SkillBar */}
      <section style={{ padding: '0 24px 24px', maxWidth: 320 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            padding: 16,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <SkillBar label="Gestion de Chantier" value={95} />
          <SkillBar label="Planification (MS Project)" value={90} />
          <SkillBar label="Réglementation Eurocodes" value={85} />
          <SkillBar label="Management d'Équipes" value={92} />
        </div>
      </section>

      {/* Démo temporaire du composant Tabs */}
      <section style={{ padding: '0 24px 24px', maxWidth: 500 }}>
        <Tabs
          label="Sections du tableau de bord"
          items={[
            {
              id: 'missions',
              label: 'Missions en cours (12)',
              content: <p>Ici s'affichera la liste des missions en cours.</p>,
            },
            {
              id: 'candidatures',
              label: 'Dernières candidatures (48)',
              content: <p>Ici s'affichera la liste des dernières candidatures.</p>,
            },
          ]}
        />
      </section>
    </>
  )
}

export default App

/* Icônes de démonstration : dans les vraies pages, chaque écran passera ses
 * propres icônes à StatCard/FeatureHighlight (composition), ces composants
 * n'en imposent aucune. */

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 5-5" />
    </svg>
  )
}

function CoinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5.7 2.5 2-1.1 1.8-2.5 2-2.5.7-2.5 2 1.1 2 2.5 2 2.5-1.1 2.5-2.5" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  )
}
