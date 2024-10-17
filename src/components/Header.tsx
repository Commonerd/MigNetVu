import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, User, UserPlus } from "lucide-react";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Globe className="mr-2" />
          <span className="text-xl font-bold">MigNetVu</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/add-network">{t("addNetwork")}</Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center">
                <User className="mr-1" /> {t("login")}
              </Link>
            </li>
            <li>
              <Link to="/register" className="flex items-center">
                <UserPlus className="mr-1" /> {t("register")}
              </Link>
            </li>
            <li>
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-blue-500 text-white"
              >
                <option value="ko">한국어</option>
                <option value="en">English</option>
                <option value="ja">日本語</option>
                <option value="ru">Русский</option>
                <option value="zh">中文</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
