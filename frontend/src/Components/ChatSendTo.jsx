import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function SendTo({ text }) {
  const el = useRef(null);

  useGSAP(() => {
    const animate = () => {
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

      tl.fromTo(
        el.current,
        { x: 100, opacity: 0, scaleX: 0.8, scaleY: 1.2 },
        { x: 0, opacity: 1, scaleX: 1, scaleY: 1, duration: 0.4 }
      )
        .to(el.current, {
          scaleX: 1.1,
          scaleY: 0.9,
          duration: 0.2,
          ease: "power1.inOut",
        })
        .to(el.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)",
        })
        .fromTo(
          el.current,
          { boxShadow: "0 0 0px rgba(255,255,255,0.8)" },
          {
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          }
        );
    };

    if (!document.hidden) {
      animate();
    } else {
      const handleVisibilityChange = () => {
        if (!document.hidden) {
          animate();
          document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
          );
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }
  }, []);

  return (
    <div
      ref={el}
      className="ChatSendTo-- text-white ml-auto"
      style={{ padding: "10px 18px", opacity: 1 }}
    >
      {text}
    </div>
  );
}

export default SendTo;
