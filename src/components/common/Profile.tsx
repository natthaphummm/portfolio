import { Github, Linkedin, Mail, Download, User, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

import ProfileImage from "../../assets/profile.webp";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <section
      id="profile"
      className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
    >
      {/* Profile Picture */}
      <div className="relative group">
        <div className="w-48 h-48 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
          {ProfileImage ? (
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-24 h-24 text-gray-300 dark:text-gray-600" />
          )}
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          {t("project.name")}
        </h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-300 font-medium">
          {t("project.job")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
          {t("project.description")}
        </p>
      </div>

      {/* Contact Channels */}
      <div className="space-y-6 w-full max-w-xs lg:max-w-none">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="text-sm">{t("project.location")}</span>
          </div>
          <a
            href="mailto:info.natthaphum@gmail.com"
            className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="text-sm">info.natthaphum@gmail.com</span>
          </a>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center lg:justify-start gap-4">
          <a
            href="https://github.com/natthaphummm"
            target="_blank"
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/natthaphum-phusong/"
            target="_blank"
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-600 hover:text-white transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="group flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white w-full py-3 rounded-lg font-medium transition-all hover:bg-gray-800 dark:hover:bg-gray-600 active:scale-95"
        >
          <Download className="w-4 h-4 group-hover:animate-bounce" />
          {t("project.resume")}
        </a>
      </div>

      <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div className="pt-8 text-xs text-gray-400 dark:text-gray-500 hidden lg:block">
        © {new Date().getFullYear()} Natthaphum Phusong. All rights reserved.
      </div>
    </section>
  );
}
