import styles from "./FeaturesSectionWithHoverEffects.module.css"

// Simple SVG icons to replace Tabler icons
const icons = {
  terminal: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="m6 9 4 4-4 4" />
      <line x1="13" y1="13" x2="17" y2="13" />
    </svg>
  ),
  ease: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  ),
  dollar: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  cloud: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  route: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <polyline points="18,9 21,12 18,15" />
    </svg>
  ),
  help: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  adjustments: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6" />
      <path d="M21 12h-6m-6 0H3" />
      <path d="M5.6 6.6l4.24 4.24m4.95 4.95L19.4 19.4" />
      <path d="M18.4 6.6l-4.24 4.24m-4.95 4.95L4.6 18.4" />
    </svg>
  ),
  heart: (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
}

const Feature = ({ title, description, icon, index }) => {
  const isTopRow = index < 4

  return (
    <div className={styles.feature}>
      <div className={`${styles.gradientOverlay} ${isTopRow ? styles.gradientTop : styles.gradientBottom}`} />

      <div className={styles.iconContainer}>{icon}</div>

      <div className={styles.titleContainer}>
        <div className={styles.titleBar} />
        <span className={styles.titleText}>{title}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  )
}

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Live GPS Tracking",
      description: "Instant bus location updates for commuters and operators, improving reliability and reducing wait times.",
      icon: icons.ease,
    },
    {
      title: "Unified Dashboard",
      description: "Monitor your entire fleet and access analytics in one place for smarter decision making.",
      icon: icons.terminal,
    },
    {
      title: "Overcrowding Alerts",
      description: "Real-time notifications help prevent overcrowding and improve commuter comfort.",
      icon: icons.dollar,
    },
    {
      title: "Accurate ETA",
      description: "Get precise arrival times with real-time delays and route changes factored in.",
      icon: icons.cloud,
    },
    {
      title: "Works in Low Network Zones",
      description: "Optimized for 2G/3G connectivity to ensure uninterrupted service in challenging areas.",
      icon: icons.route,
    },
    {
      title: "Advanced QR Ticketing",
      description: "High speed, multi-factor authentication for tickets using advanced QR technology.",
      icon: icons.help,
    },
    {
      title: "Seamless Integration",
      description: "Easily integrates with existing transit systems for a smooth transition and operation.",
      icon: icons.adjustments,
    },
    {
      title: "Commuter-Centric Design",
      description: "Built to solve real problems faced by public transport users, making every journey better.",
      icon: icons.heart,
    },
  ]

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}
