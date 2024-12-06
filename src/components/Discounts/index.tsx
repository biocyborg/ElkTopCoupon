import { Promo } from "@/app/staticDatum";
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Tooltip } from "antd";

interface IDiscountsProps {
  item: Promo;
}

function Discounts({ item }: IDiscountsProps) {
  const { type, time, startDate, endDate, promoImage, promoUrl } = item;

  const { t } = useTranslation();

  if (type === "COUPON") {
    const { discountCodes } = item;
    return (
      <div className={styles.couponItem}>
        <div className={styles.time}>{time}</div>
        <div className={styles.header}>
          <span>{t("coupon")}</span>
          <Tooltip title={t("download_hint")} color="#95bf47" key="#95bf47">
            <Link
              target="_blank"
              href="https://chromewebstore.google.com/detail/eutopia-aliexpress-discou/pgeibfelcomlphhgnkihiibnhpadaddc"
            >
              MORE...
            </Link>
          </Tooltip>
        </div>
        <div className={styles.content}>
          <div className={styles.couponCode}>
            <div className={styles.couponTop}>
              <a
                className={styles.couponBackground}
                href={promoUrl}
                target="_blank"
              >
                <img src={promoImage} alt="" />
              </a>
              <div className={styles.couponContent}>
                {discountCodes.map((item, index) => (
                  <div className={styles.couponContentItem} key={index}>
                    <span>{item.discountAmount}</span>
                    <span>{item.minOrderAmount}</span>
                    <span>{item.code}</span>
                  </div>
                ))}
                <div className={styles.couponContentMore}>......</div>
              </div>
            </div>
            <div className={styles.couponBottom}>
              <div className={styles.couponSectionTime}>
                <span>On sale: </span>
                <span>{startDate}</span>
                <span> ~ </span>
                <span>{endDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const { bannerDetails } = item;
    const { imageUrl, linkUrl, altText } = bannerDetails || {};
    return (
      <div className={styles.couponItem}>
        <div className={styles.time}>{time}</div>
        <div className={styles.header}>{t("banner")}</div>
        <div className={styles.content}>
          <div className={styles.couponBanner}>
            <a href={linkUrl} target="_blank">
              <img src={imageUrl} alt={altText} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export { Discounts };
