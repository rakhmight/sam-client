import Navigation from "../components/Messenger/Navigation";
import Info from "../components/Messenger/Info";
import Chats from "../components/Messenger/Chats";
import Chat from "../components/Messenger/Chat";
import '../assets/css/messenger.css'

export default function(){
    return (
        <div className="messenger">
            <div></div>
            <Navigation/>
            <Chats/>
            <Chat/>
            <Info/>
        </div>
    )
}