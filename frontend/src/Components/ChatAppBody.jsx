import Bgtheme from "./Bgtheme";
import ChatListPanel from "./Chat-list-panel";
import ChatWindow from "./Chat-window";

function ChatAppBody() {
  return (
    <div className="flex flex-1 absolute chat-body w-full h-full">
      <ChatListPanel />
      <ChatWindow />
    </div>
  );
}
export default ChatAppBody;
