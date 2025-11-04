function ChatInput() {
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3 border-t border-slate-700 Chat--chat-input">
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-1 bg-slate-700 rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center">
          <span>➤</span>
        </button>
      </div>
    </>
  );
}

export default ChatInput