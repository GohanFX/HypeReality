const ChatRoomItem = () => {
    return <div className="w-full h-[60px] p-1 hover:bg-slate-400 rounded-md">
        <div className="flex items-center justify-center w-full h-full space-x-[17px]">
            <div className="w-[50px] rounded-full h-full border border-secondary">
        
            </div>
            <div className=" leading-5 hidden lg:block w-3/4 h-ful">
            <h1 className="text-secondary text-[24px] font-semibold">Username</h1>
            <h1 className="text-secondary text-[15px] text-opacity-60 truncate">Leírásasdasdasdasdasdasdasdasd</h1>
            </div>
        </div>
      </div>
};

export default ChatRoomItem;