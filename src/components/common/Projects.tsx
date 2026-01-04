import { Github, ExternalLink, Code2 } from "lucide-react";
import TechBadge from "./TechBadge";

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
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            ผลงานที่ผ่านมาบางส่วนที่ผมภูมิใจนำเสนอ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-xl hover:border-gray-300"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors relative overflow-hidden">
                {/* Placeholder Image Logic */}
                <Code2 className="w-12 h-12 opacity-20" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <a
                      href={project.repoLink}
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
