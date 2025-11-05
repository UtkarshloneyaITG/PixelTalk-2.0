import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function SendBy({ text, date, time, name, image }) {
  const el = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

    tl.from(el.current, {
      x: -100,
      opacity: 0,
      scaleX: 0.8,
      scaleY: 1.2,
      duration: 0.2,
    })
      // 2️⃣ Quick settle bounce
      .to(el.current, {
        scaleX: 1.1,
        scaleY: 0.9,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(el.current, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.2,
        ease: "elastic.out(1, 0.5)",
      })
      // 3️⃣ Flash effect
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
      {image != null ? (
        <img
          src={image}
          style={{
            maxWidth: "300px",
            marginBottom: "5px",
            borderRadius: "10px",
          }}
        ></img>
      ) : (
        ""
      )}
      {text}
    </div>
  );
}

export default SendBy;
