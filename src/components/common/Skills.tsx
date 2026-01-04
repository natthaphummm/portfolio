import { useTranslation } from "react-i18next";
import TechBadge from "./TechBadge";
interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Nextjs", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Nodejs", "ExpressJS", "PostgreSQL", "Prisma", "MongoDB"],
  },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VSCode"] },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mb-16 scroll-mt-24">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
        {t("skills.title")}
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
