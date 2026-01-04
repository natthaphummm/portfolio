import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">ร่วมงานกับผม</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          หากคุณกำลังมองหา Web Developer เพื่อร่วมสร้างโปรเจกต์
          หรือต้องการพูดคุยแลกเปลี่ยนความคิดเห็น
          สามารถติดต่อผมได้ตามช่องทางด้านล่างนี้
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:example@email.com"
            className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>© 2026 Natthaphum Phusong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
