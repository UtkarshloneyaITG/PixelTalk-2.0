function ChatAppHeader() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-slate-800 border-b border-slate-700">
      <div className="flex gap-6 font-medium">
        <div className="cursor-pointer hover:text-sky-400">Followers</div>
        <div className="cursor-pointer hover:text-sky-400">Following</div>
        <div className="cursor-pointer hover:text-sky-400">In Contact</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-full cursor-pointer text-sm">
          Add Designer
        </div>
        <div className="flex items-center gap-2 cursor-pointer w-9 h-9">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7s8jgunlzu9RHZlpQDsmht3vHqCYFmWk4eg&s"
            className="w-full h-full rounded-full object-cover"
            alt=""
          />
        </div>
        <span className="text-sm">Ali Krayem</span>
      </div>
    </div>
  );
}
export default ChatAppHeader;
