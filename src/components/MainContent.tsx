import React, { useEffect, useState } from "react";

const MainContent: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check for a saved theme in localStorage or default to light mode
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    // Update the class on the root element and save the theme in localStorage
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">
        {theme === "light" ? "God Mode" : "Dark God Mode"}
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default MainContent;
