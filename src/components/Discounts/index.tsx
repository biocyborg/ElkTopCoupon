import styles from "./index.module.css";
import { Item } from "./components/Item";
import { useTranslation } from "react-i18next";

export type IDiscountsType = "COUPON" | "BANNER";

interface IDiscountsProps {
  type: IDiscountsType;
  time: string;
  codeList?: {
    discounts: string;
    couponCode: string;
    condition: string;
    description?: string;
    time?: string;
    terraceImg: string;
    terraceUrl?: string;
  }[];
  bannerItem?: {
    url?: string;
    alt?: string;
  };
}

function Discounts({ type, time, codeList, bannerItem }: IDiscountsProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.couponItem}>
      <div className={styles.time}>{time}</div>
      <div className={styles.header}>
        {type === "COUPON" ? <>{t("coupon")}</> : null}
        {type === "BANNER" ? <>{t("banner")}</> : null}
      </div>
      <div className={styles.content}>
        {type === "BANNER" ? (
          <div className={styles.couponBanner}>
            <img src={bannerItem?.url} alt={bannerItem?.alt} />
          </div>
        ) : null}
        {type === "COUPON" ? (
          <>
            {codeList?.map((item, index) => (
              <Item
                key={index}
                terraceImg={item.terraceImg}
                discounts={item.discounts}
                condition={item.condition}
                description={item.description}
                time={item.time}
                couponCode={item.couponCode}
                terraceUrl={item.terraceUrl}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}

export { Discounts };
