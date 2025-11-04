import ChatListPanel from "./Chat-list-panel";
import ChatWindow from "./Chat-window";
function ChatAppBody() {
  return (
    <div className="flex flex-1">
      <ChatListPanel />
      <ChatWindow />
    </div>
  );
}
export default ChatAppBody;
