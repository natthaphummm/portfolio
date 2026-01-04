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
  return (
    <section id="skills" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 leading-relaxed">
              เครื่องมือและเทคโนโลยีที่ผมเลือกใช้เพื่อสร้างสรรค์ผลงานที่มีคุณภาพ
              สูงสุด ทั้งในด้านประสิทธิภาพและการดูแลรักษา
            </p>
          </div>

          <div className="md:w-2/3 grid gap-8 sm:grid-cols-2">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="text-lg font-semibold text-black border-l-4 border-gray-300 pl-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <TechBadge key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
