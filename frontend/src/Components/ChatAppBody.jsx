import ChatListPanel from "./Chat-list-panel";
import ChatWindow from "./Chat-window";
function ChatAppBody() {
  return (
    <div className="flex flex-1">
      <ChatListPanel />
      <ChatWindow />
      <div className="w-1/4 bg-slate-800 border-l border-slate-700 p-6 flex flex-col items-center">
        <div className="text-center flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7s8jgunlzu9RHZlpQDsmht3vHqCYFmWk4eg&s"
            className="w-20 h-20 rounded-full mb-2 object-cover"
            alt=""
          />
          <h4 className="font-semibold">Alen Santos</h4>
          <p className="text-xs text-slate-400">The name of company</p>
        </div>

        <div className="w-full mt-6 space-y-2 text-sm">
          <div className="border-b border-slate-700 pb-1 cursor-pointer hover:text-sky-400">
            Document name1.pdf
          </div>
          <div className="border-b border-slate-700 pb-1 cursor-pointer hover:text-sky-400">
            Document name2.txt
          </div>
          <div className="border-b border-slate-700 pb-1 cursor-pointer hover:text-sky-400">
            Document name3.ppt
          </div>
          <div className="border-b border-slate-700 pb-1 cursor-pointer hover:text-sky-400">
            Document name4.doc
          </div>
        </div>

        <div className="mt-auto text-[10px] text-slate-400 text-center space-y-1">
          <p>1500M ▬▬▬▬▬▬</p>
          <p>1200M ▬▬▬▬</p>
          <p>15000$ ▬▬▬▬▬▬▬▬</p>
        </div>
      </div>
    </div>
  );
}
export default ChatAppBody;
