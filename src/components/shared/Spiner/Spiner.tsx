import styles from './spiner.module.css';

function Spiner() {
     return (
    <div className={styles.spinerWrapper}>
      <div className={styles.spiner}></div>
    </div>
  );
}

export default Spiner