import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function SendBy({ text, date, time, name, image }) {
  const el = useRef(null);

  useGSAP(() => {
    const animate = () => {
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

      tl.fromTo(
        el.current,
        { x: -100, opacity: 0, scaleX: 0.8, scaleY: 1.2 },
        { x: 0, opacity: 1, scaleX: 1, scaleY: 1, duration: 0.4 }
      )
        .to(el.current, {
          scaleX: 1.1,
          scaleY: 0.9,
          duration: 0.3,
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
            ease: "power1.inOut",
          }
        );
    };

    // 👇 run only when tab visible or wait until visible
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
      className="ChatSendBy--"
      style={{
        padding: "10px 18px",
        borderRadius: "20px",
        display: "inline-block",
        color: "white",
        fontSize: "16px",
        transformOrigin: "bottom left",
      }}
    >
      {image && (
        <img
          src={image}
          style={{
            maxWidth: "300px",
            marginBottom: "5px",
            borderRadius: "10px",
          }}
        />
      )}
      {text}
    </div>
  );
}

export default SendBy;
