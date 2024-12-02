import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoTitle}>ElkTop</div>
        <div className={styles.menus}>
          {/* <Link href="/" className={styles.item}>
            Home
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export { Header };
