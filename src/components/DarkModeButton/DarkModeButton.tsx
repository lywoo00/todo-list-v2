import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === ""
  );

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (darkMode) {
      root.classList.add("dark");
      body.classList.add("bg-gray-900"); // 추가된 코드
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("bg-gray-900"); // 추가된 코드
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white absolute top-[20px] right-[20px]"
    >
      {darkMode ? "Dark" : "Light"}
    </button>
  );
};

export default DarkModeToggle;
