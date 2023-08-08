import { FC } from 'react'
import ChatTitlebarCom from "./chat-titlebar/ChatTitlebar";
import ChatWindowCom from "./chat-window/ChatWindow";
import ChatToolsCom from "./chat-tools/ChatTools";

const Chat : FC = () => {
    return (
       <div className="chat h-full bg-slate-300">
            <ChatTitlebarCom />

            <ChatWindowCom />
           
            <ChatToolsCom />
       </div>
    )
}

export default Chat