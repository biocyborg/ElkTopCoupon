export type PromoType = "COUPON" | "BANNER"; // 用首字母大写形式，增强可读性

interface PromoBase {
  type: PromoType; // 类型，"Coupon" 或 "Banner"
  time: string; // 发布时间
  startDate: string; // 开始日期，改名为 startDate，更具可读性
  endDate: string; // 结束日期，改名为 endDate
  promoImage: string; // 用 promoImage 来代替 terraceImg，更直观
  promoUrl: string; // 用 promoUrl 来代替 terraceUrl，更清晰
}

interface CouponPromo extends PromoBase {
  type: "COUPON"; // 明确指定为 "Coupon"
  discountCodes: DiscountCode[]; // 更具描述性的名称，从 codeList 改为 discountCodes
}

interface BannerPromo extends PromoBase {
  type: "BANNER"; // 明确指定为 "Banner"
  bannerDetails: BannerDetails; // 更具描述性，改名为 bannerDetails
}

export type Promo = CouponPromo | BannerPromo; // 统一类型：可以是 Coupon 或 Banner

interface BannerDetails {
  imageUrl: string; // 从 bannerImg 改为 imageUrl
  linkUrl: string; // 从 bannerUrl 改为 linkUrl
  altText: string; // 从 bannerAlt 改为 altText
}

interface DiscountCode {
  discountAmount: string; // 更具描述性，改名为 discountAmount
  code: string; // 从 couponCode 改为 code
  minOrderAmount: string; // 从 condition 改为 minOrderAmount，更具体
}

const promoData: Promo[] = [
  {
    type: "COUPON",
    time: "Dec 7, 2024, 23:59 PST",
    startDate: "Dec 9, 2024, 23:59 PST",
    endDate: "Dec 15, 2024, 23:59 PST",
    promoImage: "/assets/terrace/6115-23f0d4d9fb4ec8d1.png",
    promoUrl: "https://s.click.aliexpress.com/e/_DDaMOZH",
    discountCodes: [
      {
        discountAmount: "US$3 OFF",
        code: "AEAFF03",
        minOrderAmount: "Orders over $29",
      },
      {
        discountAmount: "US$8 OFF",
        code: "AEAFF08",
        minOrderAmount: "Orders over $69",
      },
      {
        discountAmount: "US$18 OFF",
        code: "AEAFF18",
        minOrderAmount: "Orders over $139",
      },
    ],
  },
];

export { promoData };
