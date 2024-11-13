import styles from './page.module.css';

export default function Homess() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorTitle}>Erreur Serveur</h1>
      <p className={styles.errorMessage}>
        L'API YouTube a du mal à répondre pour le moment. <br /> Veuillez réessayer plus tard.
      </p>
    </div>
  );
}
