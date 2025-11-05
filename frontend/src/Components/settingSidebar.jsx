import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

function Sidebar({ isOpen, closeSidebar }) {
    const sidebarRef = useRef(null);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const sidebar = sidebarRef.current;

        if (isOpen) {
            gsap.to(sidebar, { x: 0, duration: 0.5, ease: "power3.out" });
        } else {
            gsap.to(sidebar, { x: "100%", duration: 0.5, ease: "power3.in" });
        }
    }, [isOpen]);

    // Handle theme change
    const handleThemeChange = (e) => {
        setTheme(e.target.value);
        document.documentElement.className = e.target.value === "dark" ? "dark" : "";
    };

    return (
        <aside
            ref={sidebarRef}
            className="fixed top-0 right-0 w-80 h-screen  bg-zinc-900 p-6 flex flex-col gap-6 transform translate-x-full z-50 shadow-2xl rounded-l-3xl"
        >
            {/* Close button */}
            <button
                onClick={closeSidebar}
                className="self-end text-gray-700 dark:text-gray-200 hover:text-red-500 transition text-3xl cursor-pointer "
            >
                ✕
            </button>
        </aside>
    );
}

export default Sidebar;
