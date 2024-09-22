import styles from './Header.module.css'
import igniteLogo  from '../assets/Ignitelogo.svg'

export function Header() {
  return(
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </div>
  );
}