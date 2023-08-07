import MessengerLayout from "@/components/layouts/messenger/MessengerLayout";
import Navigation from "../components/structures/messenger/navigation/Navigation";
import Info from "../components/structures/messenger/Info";
import Chats from "../components/structures/messenger/chats/Chats";
import Chat from "../components/structures/messenger/Chat";
import '../assets/css/messenger.css'

export default function(){
    return (
        <MessengerLayout>
            <div></div>
            
            <Navigation/>
            <Chats/>
            <Chat/>
            <Info/>
        </MessengerLayout>
    )
}