import { Tooltip } from "antd";
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

interface IDiscountsProps {
  terraceImg: string;
  discounts: string;
  condition: string;
  description?: string;
  time?: string;
  couponCode: string;
  terraceUrl?: string;
}

function Item({
  terraceImg,
  discounts,
  condition,
  description,
  time,
  couponCode,
  terraceUrl,
}: IDiscountsProps) {
  const { t } = useTranslation();

  async function CopyJump() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(couponCode);
        toast.success("Copy successful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Copy failed");
    }
  }

  function getRandomCharacters(str: string, count: number) {
    if (str.length <= count) {
      return str;
    }
    const chars = str.split("");
    const selected = [];
    while (selected.length < count) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      selected.push(chars[randomIndex]);
      chars.splice(randomIndex, 1);
    }
    return selected.join("");
  }

  return (
    <div className={styles.couponCode}>
      <div className={styles.background}>
        <img src={terraceImg} alt="" />
      </div>
      <div className={styles.foreground}>
        {discounts ? (
          <div className={styles.couponDiscounts}>{discounts}</div>
        ) : null}
        {condition ? (
          <div className={styles.couponCondition}>{condition}</div>
        ) : null}
        {description ? (
          <div className={styles.couponDescription}>{description}</div>
        ) : null}
        {time ? <div className={styles.couponCodeTime}>{time}</div> : null}

        <Tooltip title={t("copyJump")} color="#95bf47" key="#95bf47">
          <a
            href={terraceUrl}
            className={styles.couponCodes}
            onClick={CopyJump}
            target="_blank"
          >
            {couponCode}
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export { Item };
