"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [images, setImages] = useState<
    {
      url: string;
      width: number;
      left: number;
      top: number;
      rotation: number;
      opacity: number;
    }[]
  >([]);

  const imageUrls = [
    "/assets/terrace/6115-23f0d4d9fb4ec8d1",
    "/assets/terrace/14350-f63cee393e3683df",
    "/assets/terrace/15460-365f7eab2a66f950",
    "/assets/terrace/15467-132f8e42f99e6f75",
    "/assets/terrace/18336-16313399a7473b4b",
    "/assets/terrace/18428-6999aaa7187e4c25",
    "/assets/terrace/21079-dc42bc6bed43dbd2",
    "/assets/terrace/24073-20294aae38122887",
    "/assets/terrace/24286-7f653b51c4842598",
    "/assets/terrace/24287-ff8b06f448b60cfe",
    "/assets/terrace/24288-24c2d19331bac327",
    "/assets/terrace/24964-fb1c4097db91a35c",
    "/assets/terrace/25572-9682b404c179dddd",
    "/assets/terrace/26032-83f320d496a2f9e8",
    "/assets/terrace/26846-d58dfb65a2cfcd62",
    "/assets/terrace/29017-ed011a07f2488816",
    "/assets/terrace/37060-10b6f52537638733",
    "/assets/terrace/43785-cc8f10fc4c2fdb80",
    "/assets/terrace/44866-2a92fdf1672e6f07",
    "/assets/terrace/104523-821fe6dc26a266e3",
    "/assets/terrace/106534-ab8094c75de221eb",
    "/assets/terrace/108749-edeb0f8adfff472c",
  ];

  useEffect(() => {
    const generatedImages: {
      url: string;
      width: number;
      left: number;
      top: number;
      rotation: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < imageUrls.length; i++) {
      const randomImage =
        imageUrls[Math.floor(Math.random() * imageUrls.length)];

      // 随机宽度、位置、旋转角度、透明度
      const randomWidth = Math.random() * (300 - 50) + 50; // 随机宽度（50px - 300px）
      const randomLeft = Math.random() * (1248 - randomWidth); // 随机X位置
      const randomTop = Math.random() * (180 - 100) + 20; // 随机Y位置，让图片不局限于某条线
      const randomRotation = Math.random() * 30 - 15; // 随机旋转角度（-15度 到 15度）
      const randomOpacity = Math.random() * 0.5 + 0.5; // 随机透明度（0.5到1之间）

      generatedImages.push({
        url: randomImage,
        width: randomWidth,
        left: randomLeft,
        top: randomTop,
        rotation: randomRotation,
        opacity: randomOpacity,
      });
    }

    setImages(generatedImages);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.terrace}>
        <div className={styles.terraceTitle}>
          Featured Stores with Discount Codes
        </div>
        <div className={styles.terraceItems}>
          {images.map((image, index) => (
            <img
              key={index}
              src={`${image.url}.png`}
              alt={`Image ${index}`}
              style={{
                width: `${image.width}px`,
                top: `${image.top}px`,
                left: `${image.left}px`,
                transform: `rotate(${image.rotation}deg)`,
                opacity: image.opacity,
              }}
              className={styles.image}
            />
          ))}
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
                <div className={styles.header}>Coupon</div>
                <div className={styles.content}>
                  <div className={styles.couponCode}>
                    <div className={styles.couponDiscounts}>1111</div>
                    <div className={styles.couponCondition}>2222</div>
                    <div className={styles.couponDescription}>3333</div>
                    <div className={styles.couponCodeTime}>4444</div>
                    <div className={styles.couponCodes} title="6666">
                      6666
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.couponItem}>
                <div className={styles.time}>2024-12-02T04:01</div>
                <div className={styles.header}>Banner</div>
                <div className={styles.content}>
                  <div className={styles.couponBanner}>2354656</div>
                </div>
              </div>
            </div>
            <div className={styles.couponTimeEnd}>
              You&apos;ve reached the bottom of the list.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
