import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Heaader() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <ul>
        <li>
          <Link to={"tashkilot"}>{t("navbar.tash")}</Link>
        </li>
        <li>
          <Link to={"login"}>{t("navbar.imkon")}</Link>
        </li>
      </ul>
      <select
        name=""
        id=""
        onClick={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="uz">Uzbekcha</option>
        <option value="ru">Ruscha</option>
      </select>
    </div>
  );
}

export default Heaader;
