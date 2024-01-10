import styles from './tooltip.module.css';

export const Tooltip = ({ icon, technologyName }: { icon: string; technologyName: string }) => {
  return (
    <div className={styles.tooltipContainer}>
      <img className={styles.technologyIcon} src={icon} alt={technologyName} />
      <span className={styles.tooltiptext}>{technologyName}</span>
    </div>
  );
};
