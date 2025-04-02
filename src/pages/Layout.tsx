import { Outlet, Link } from "react-router-dom";
import styles from "../styles/Layout.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Zoo</h1>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Hem</Link>
          <Link to="/animals" className={styles.link}>Djuren</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
