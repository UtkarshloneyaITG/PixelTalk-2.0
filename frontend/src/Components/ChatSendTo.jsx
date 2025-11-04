function SendTo({ text, date, time }) {
  return (
    <>
      <div className="bg-gradient-to-red  from-green-500 to-cyan-200 text-white rounded-2xl shadow-[inset_-6px_4px_17px_5px_#3dff84] rounded-br-none p-3 max-w-md text-sm ml-auto  ChatSendTo--">
        {text}
        <small className="block mt-1 text-[10px] text-slate-200">
          Me | {date}, {time}
        </small>
      </div>
    </>
  );
}

export default SendTo;
