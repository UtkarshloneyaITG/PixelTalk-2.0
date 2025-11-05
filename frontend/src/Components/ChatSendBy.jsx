import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

function SendBy({ text, date, time, name }) {

  useGSAP(() => {
    gsap.from(".ChatSendBy-- ", {
      y: 20,
      duration: .3,
      ease: 'elastic.out',
    })
  })


  return (
    <>
      <div className="  ChatSendBy-- ">
        {text}
      </div>
    </>
  );
}

export default SendBy;
