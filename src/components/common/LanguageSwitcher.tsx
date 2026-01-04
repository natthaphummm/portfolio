import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const isTH = currentLang === "th";
  const isEN = currentLang === "en";

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1 shadow-inner transition-colors duration-300">
      <button
        onClick={() => i18n.changeLanguage("th")}
        className={`px-3 py-1 text-xs cursor-pointer rounded-full transition-all
          ${
            isTH
              ? "bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white font-bold"
              : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 font-medium"
          }
        `}
      >
        TH
      </button>

      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-3 py-1 text-xs cursor-pointer rounded-full transition-all
          ${
            isEN
              ? "bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white font-bold"
              : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 font-medium"
          }
        `}
      >
        EN
      </button>
    </div>
  );
}
