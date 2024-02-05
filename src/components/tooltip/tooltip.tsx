import styles from './tooltip.module.css';

export const Tooltip = ({ icon, technologyName }: { icon: string; technologyName: string }) => {
  return (
    <div className={styles.tooltipContainer}>
      <img className={styles.technologyIcon} src={icon} alt={technologyName} width={70} height={70} />
      <span className={styles.tooltipText}>{technologyName}</span>
    </div>
  );
};
