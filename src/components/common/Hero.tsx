import { useTranslation } from "react-i18next";
import { Download, ChevronDown, User } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 flex flex-col justify-center min-h-[80vh] bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-5xl">
        {/* Text Content - Left Side */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold tracking-wide text-gray-600 mb-2">
            AVAILABLE FOR WORK
          </div> */}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-tight">
            {/* Hi, I'm <span className="text-gray-400">Dave</span>. <br />
            Building Digital <span className="text-gray-400">Experiences</span> */}
            {t("hero.name")}
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {/* ผมเป็น{" "}
            <span className="font-semibold text-black">Web Developer</span>{" "}
            ที่หลงใหลในการสร้างสรรค์เว็บไซต์ที่สวยงามและใช้งานง่าย
            ด้วยประสบการณ์ในการพัฒนา{" "}
            <span className="font-semibold text-black">React</span> และ{" "}
            <span className="font-semibold text-black">Modern UI</span>{" "}
            เพื่อยกระดับธุรกิจของคุณ */}
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <a
              href="/resume.pdf"
              className="group flex items-center justify-center gap-2 bg-black text-white px-6 py-2.5 rounded-full font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              {t("hero.resume")}
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white text-black border border-gray-300 px-6 py-2.5 rounded-full font-medium transition-all hover:border-black hover:bg-gray-50 text-sm md:text-base"
            >
              {t("hero.contact")}
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Profile Picture Section - Right Side */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
              {/* Note: Replace the User icon below with an <img /> tag for your actual photo */}
              {/* Example: <img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
              <User className="w-24 h-24 md:w-32 md:h-32 text-gray-300" />
            </div>
            {/* Online Status Indicator */}
            <div
              className="absolute bottom-5 right-5 w-5 h-5 bg-green-500 rounded-full border-4 border-white"
              title="Available for work"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
