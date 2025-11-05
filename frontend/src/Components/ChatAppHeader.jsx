import { useRef, useEffect } from "react";
import gsap from "gsap";

function ChatAppHeader() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const dots = btn.querySelectorAll("span");

    const hoverAnim = () => {
      const tl = gsap.timeline();

      tl.to(btn, {
        scale: 1.2,
        duration: 0.2,
        // ease: "power1.out",
      });
      
      tl.to(dots,{
        y:-10,
        stagger : 1
      })
      
    };

    // const hoverOutAnim = () => {
    //   gsap.to(btn, { scale: 1, rotation: 0, duration: 0.2, ease: "power1.out" });
    //   gsap.to(dots, { y: 0, rotation: 0, duration: 0.2, stagger: 0.05 });
    // };

    btn.addEventListener("mouseenter", hoverAnim);
    btn.addEventListener("mouseleave", hoverOutAnim);

    return () => {
      btn.removeEventListener("mouseenter", hoverAnim);
      btn.removeEventListener("mouseleave", hoverOutAnim);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-5">
      <div className="profile flex items-center">
        <div className="profile-image w-10 h-10 bg-gray-500 rounded-full"></div>
        <div className="px-3 py-8 Chat-Person--placeholder text-2xl">User</div>
      </div>
      <div className="extra flex pr-3">
        <button ref={buttonRef} className="cursor-pointer flex space-x-1">
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </button>
      </div>
    </div>
  );
}

export default ChatAppHeader;
