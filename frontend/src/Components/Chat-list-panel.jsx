import ChatRow from "./Chat-row";

function ChatListPanel() {
  return (
    <div className="w-1/4 border-r overflow-y-auto Chat--chat-list">
      <ChatRow />
      <ChatRow />
      <ChatRow />
    </div>
  );
}

export default ChatListPanel;
