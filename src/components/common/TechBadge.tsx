import StackIcon from "tech-stack-icons";

export default function TechBadge({ name }: { name: string }) {
  return (
    <div className="group relative flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-sm transition-all duration-200">
      {/* <TechIcon name={name} className="w-6 h-6 sm:w-8 sm:h-8" /> */}
      <StackIcon
        name={name.toLocaleLowerCase()}
        className="w-6 h-6 sm:w-8 sm:h-8"
      />
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block z-20">
        <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap relative">
          {name}
          {/* Triangle arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
