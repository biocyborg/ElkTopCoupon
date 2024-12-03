import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.terrace}>
        <div className={styles.terraceTitle}>
          Featured Stores with Discount Codes
        </div>
        <div className={styles.terraceItems}>
          <img
            src="https://ae01.alicdn.com/kf/Sfb5db1f864874e6f924f03623948be58k/867x267.png"
            alt=""
            className={styles.aliexpress}
          />
        </div>
      </div>
      <div className={styles.terrace}>
        <div className={styles.terraceTitle}>Quickly apply coupon</div>
        <div className={styles.plugin}>
          <div className={styles.img}>
            <img src="/assets/exhibition.avif" alt="" />
            <img src="/assets/employ.avif" alt="" />
          </div>
          <div className={styles.introduce}>
            <span>EUtopia: AliExpress Discount Code Locator</span>
            <span>
              Unlock savings instantly and use official AliExpress coins for
              even more discounts!
            </span>
            <span>Automatically applies discount codes for you.</span>
            <span>Make your shopping more affordable!</span>
          </div>
          <div className={styles.btn}>
            <a
              href="https://chromewebstore.google.com/detail/eutopia-aliexpress-discou/pgeibfelcomlphhgnkihiibnhpadaddc"
              target="_blank"
              className={styles.click}
            >
              Download plugin
            </a>
          </div>
          <img src="/assets/logo.png" alt="" className={styles.logo} />
        </div>
      </div>

      <div className={styles.terrace}>
        <div className={styles.terraceTitle}>
          Featured Stores with Discount Codes
        </div>
        <div className={styles.coupon}>
          <div className={styles.couponContent}>
            <div className={styles.couponTime}>TODAY</div>
            <div className={styles.couponItems}>
              <div className={styles.couponItem}>
                <div className={styles.time}>2024-12-04T04:01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
