import { useTranslation } from "react-i18next";
import { Github, ExternalLink, Code2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "ระบบจัดการหลังบ้านสำหรับร้านค้าออนไลน์ แสดงกราฟยอดขายและการจัดการสต็อกสินค้า",
    tags: ["React", "TypeScript", "TailwindCSS"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "แอปพลิเคชันสำหรับจัดการงานในทีม รองรับระบบ Drag & Drop และ Real-time update",
    tags: ["Nextjs", "Firebase"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Personal Blog Platform",
    description: "แพลตฟอร์มเขียนบล็อกที่รองรับ Markdown และ SEO Optimization",
    tags: ["React", "Nodejs", "MongoDB"],
    demoLink: "#",
    repoLink: "#",
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="scroll-mt-24">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
        {t("projects.title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 duration-300"
          >
            <div className="h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 transition-colors relative overflow-hidden">
              <Code2 className="w-10 h-10 opacity-20" />
            </div>

            <div className="p-5 flex flex-col grow">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 grow leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.repoLink}
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> {t("projects.code")}
                  </a>
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />{" "}
                    {t("projects.demo")}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
