import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Code2, Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.skills"), href: "#skills" },
    { name: t("navbar.projects"), href: "#projects" },
  ];

  return (
    <header
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white flex items-center gap-2"
        >
          <Code2 className="w-6 h-6" />
          <span>{t("navbar.brand")}</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-gray-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
