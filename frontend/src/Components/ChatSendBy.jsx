function SendBy({ text, date, time, name }) {
  return (
    <>
      <div className=" rounded-2xl rounded-bl-none p-3 max-w-md text-sm ChatSendBy--">
        {text}
        <small className="block mt-1 text-[10px] text-slate-400">
          {name} | {date}, {time}
        </small>
      </div>
    </>
  );
}

export default SendBy;
