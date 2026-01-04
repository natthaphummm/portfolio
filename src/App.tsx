import Navar from "./components/layout/Navbar";
import Skills from "./components/common/Skills";
import Projects from "./components/common/Projects";
import Profile from "./components/common/Profile";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 antialiased transition-colors duration-300 font-sans selection:bg-gray-200 dark:selection:bg-gray-700">
      <Navar />

      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <aside className="w-full lg:w-[30%] pt-24 lg:pt-0 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-center">
            <Profile />
          </aside>

          <main className="w-full lg:w-[70%] py-12 lg:py-24">
            <Skills />
            <Projects />

            <div className="pt-12 text-center text-xs text-gray-400 dark:text-gray-500 lg:hidden pb-8 border-t border-gray-200 dark:border-gray-700 mt-8">
              © {new Date().getFullYear()} Natthaphum Phusong. All rights
              reserved.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
