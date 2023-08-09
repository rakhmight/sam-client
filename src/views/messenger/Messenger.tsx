import { FC } from 'react'
import MessengerLayout from "@/components/layouts/messenger/MessengerLayout";
import Navigation from "../../components/structures/messenger/navigation/Navigation";
import Info from "../../components/structures/messenger/Info/InfoPanel";
import Chats from "../../components/structures/messenger/chats/Chats";
import Chat from "../../components/structures/messenger/chat/Chat";

const Messenger : FC = () => {
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

export default Messenger