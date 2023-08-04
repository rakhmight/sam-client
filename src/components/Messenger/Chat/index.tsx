import ChatTitlebarCom from "./ChatTitlebar";
import ChatWindowCom from "./ChatWindow";
import ChatToolsCom from "./ChatTools";

export default function Chat(){
    return (
       <div className="chat h-full bg-slate-300">
            <ChatTitlebarCom />

            <ChatWindowCom />
           
            <ChatToolsCom />
       </div>
    )
   }