import ChatBoard from "./ChatBoard";
import ChatSideBar from "./ChatSideBar";

const Chat = () => {
    return <div className="h-4/5 w-2/3 flex rounded-md border-secondary border ">
        <ChatSideBar />
        <ChatBoard />
    </div>
};

export default Chat;