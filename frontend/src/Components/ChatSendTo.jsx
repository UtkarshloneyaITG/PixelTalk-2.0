import { useMsgFunctions } from "../provider/msgContext";

function SendTo({ text, date, time }) {


  return (
    <>
      <div className=" text-white  ml-auto  ChatSendTo--">{text}</div>
    </>
  );
}

export default SendTo;
