import { MdMore } from "react-icons/md";

const ChatBoard = () => {
  return (
    <div className="text-black w-3/4">
        {/* HEADER OF CHAT*/}
      <div className="w-full h-[60px] border-b border-b-secondary justify-between flex items-center p-2">
        <div className="flex items-center relative  w-full space-x-2">
          <div className=" h-full flex items-center justify-center relative">
            <div className="w-[60px] h-[60px] rounded-full border border-secondary bg-background relative z-10 top-3"></div>
          </div>
          <div className="h-full flex items-center">
            <h1 className="text-secondary text-[1.3rem] font-medium">Username</h1>
          </div>
        </div>
        <span className="w-[30px] h-[30px] items-center flex cursor-pointer text-secondary text-lg">
          <MdMore  />
          </span>
      </div>
        {/* CHAT BOARD */}
        <div className="w-full h-3/4 p-2 relative flex flex-col z-0 bg-red-200 gap-[15px] overflow-y-auto">
            <p className="min-w-[10%] w-2/4  p-2 rounded-md  bg-white">
                HELLO w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4 w-2/4
            </p>
            <p  className="min-w-[10%] w-2/4 p-2 rounded-md  bg-white ">
                HELLO
            </p>
            <p  className="min-w-[10%] w-2/4 p-2 rounded-md  bg-white">
                HELLO
            </p>
            <p  className="min-w-[10%] w-2/4 p-2 rounded-md  bg-white">
                HELLO
            </p>

        </div>

        {/* FOOTER OF CHAT */}
        <div className="w-full h-[50px] border-t border-b-secondary justify-between flex items-center p-2">
            <div className="flex items-center relative  w-full space-x-2">
                <div className="h-3/4 w-2/4 flex items-center ">
                    <textarea  className="w-full h-[40px]  resize-none rounded-md border outline-none border-secondary p-2" placeholder="Type a message"/>
                </div>
            </div>
            <span className="w-[30px] h-[30px] items-center flex cursor-pointer text-secondary text-lg">
                <MdMore  />
            </span>
          </div>


    </div>
  );
};

export default ChatBoard;
