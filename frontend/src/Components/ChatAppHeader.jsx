function ChatAppHeader() {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="profile flex items-center">
        <div className="profile-image"></div>
        <div className="px-3 py-8  Chat-Person--placeholder text-2xl">
          User
        </div>
      </div>
      <div className="extra flex pr-3">●●●</div>
    </div>
  );
}
export default ChatAppHeader;
