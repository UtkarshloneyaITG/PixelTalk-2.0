import React, { useState } from "react";
import theme2 from "../assets/theme/theme2.jpg";
import theme3 from "../assets/theme/theme3.jpg";
import theme4 from "../assets/theme/theme4.jpg";
import theme5 from "../assets/theme/theme5.jpg";
import theme6 from "../assets/theme/theme6.jpg";
import theme7 from "../assets/theme/theme7.jpg";
import theme8 from "../assets/theme/theme8.jpg";
import theme9 from "../assets/theme/theme9.jpg";

const ThemeSelection = ({ onClose }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    theme2,
    theme3,
    theme4,
    theme5,
    theme6,
    theme7,
    theme8,
    theme9,
  ];

  const handleApply = () => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody && selectedTheme) {
      chatBody.style.backgroundImage = `url(${selectedTheme})`;
      chatBody.style.backgroundSize = "cover";
      chatBody.style.backgroundPosition = "center";
      chatBody.style.backgroundRepeat = "no-repeat";
    } else {
      console.warn("⚠️ No theme selected or .chat-body not found!");
    }

    setSelectedTheme(null);
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 animate-fadeIn">
      <div className="theme-box bg-zinc-800 rounded-2xl shadow-2xl p-8 w-[90%] max-w-4xl relative">
        <h2 className="theme-heading text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Choose a Theme
        </h2>

        {/* Theme Grid */}
        <div className="theme-img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {themes.map((theme, index) => (
            <button
              key={index}
              onClick={() => setSelectedTheme(theme)}
              className={`theme-card p-2 rounded-xl cursor-pointer transition transform hover:scale-105 hover:shadow-lg border-2 ${
                selectedTheme === theme
                  ? "border-blue-500 scale-105"
                  : "border-transparent"
              }`}
            >
              <img
                src={theme}
                alt={`Theme ${index + 1} preview`}
                className="w-full h-32 object-cover rounded-lg"
              />
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 text-gray-300 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={!selectedTheme}
            className={`px-6 py-2 rounded-lg text-white transition ${
              selectedTheme
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelection;
