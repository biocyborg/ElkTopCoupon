"use client";

import clm from "country-locale-map";
import ReactCountryFlag from "react-country-flag";

import { Select } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ValueKeys, langs } from "@/locale/config";
import { getLocalI18nProfile, setLocalI18nProfile } from "@/locale/i18n";

import styles from "./index.module.css";

import { initI18n } from "@/locale/i18n";

initI18n();
function Header() {
  const { i18n } = useTranslation();

  const handleChange = (value: ValueKeys) => {
    setLocalI18nProfile(value);
    i18n.changeLanguage(value);
  };

  const getOptions = useMemo(() => {
    const flag = [];
    for (let index = 0; index < langs.length; index++) {
      const element = langs[index];

      const countryInfo = clm.getCountryByAlpha2(element.value?.toUpperCase())
        ? clm.getCountryByAlpha2(element.value?.toUpperCase())
        : clm.getCountryByAlpha3(element.value?.toUpperCase())
        ? clm.getCountryByAlpha3(element.value?.toUpperCase())
        : clm.getCountryByName(element.label);

      flag.push({
        value: element.value,
        label: (
          <>
            {countryInfo ? (
              <ReactCountryFlag
                countryCode={element.value}
                style={{ width: 24, height: 24, marginRight: 14 }}
                svg
              />
            ) : null}

            {element.label}
          </>
        ),
      });
    }
    return flag;
  }, []);

  const getDefaultValue = useMemo(() => {
    const locality = getLocalI18nProfile();
    const select = langs.find((item) => item.value === locality) || {
      value: "us",
    };

    console.log(locality, "locality");
    console.log(select);

    i18n.changeLanguage(select.value);
    return select.value;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoTitle}>ElkTop</div>
        <div className={styles.menus}></div>
        <div className={styles.multilingual}>
          <Select
            defaultValue={getDefaultValue}
            style={{ width: 160 }}
            onChange={handleChange}
            options={getOptions}
          />
        </div>
      </div>
    </div>
  );
}

export { Header };
