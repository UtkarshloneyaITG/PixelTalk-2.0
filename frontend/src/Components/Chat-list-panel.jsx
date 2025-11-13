import AddBtn from "./AddBtn";
import ChatRow from "./Chat-row";
import UserBox from "./UserBox";

function ChatListPanel() {
  return (
    <div className="overflow-y-auto chat-list flex items-center">
      <div className="chat-panel rounded-2xl">
        <div className="title pl-5 pr-7 py-5 text-5xl gradient-text">
          PixelTalk
        </div>
        <div className="user-list">
          <UserBox/>
        </div>
        <AddBtn />
      </div>
    </div>
  );
}

export default ChatListPanel;
