import { FC } from 'react'
import ChatTypeBtn from "@/components/ui/buttons/chat-type-btn/ChatTypeBtn";
import { Divider } from "@chakra-ui/react";
import { BsChatDots, BsMegaphone, BsStar } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ChatTypes } from './types';

const ChatsType : FC = () => {
  const types : ChatTypes = [
    { icon:BsChatDots, aLabel:"Chats", fs:"24px", available:false },
    { icon:BsMegaphone, aLabel:"Channels", fs:"22px", available:true },
    { icon:HiOutlineUserGroup, aLabel:"Groups", fs:"22px", available:true },
    { icon:BsStar, aLabel:"Favorite", fs:"22px", available:true },
  ]

  return (
    <div className="w-full">
      <div className="px-2.5 pt-2.5 w-full flex flex-row justify-between">

        {
          types.map(type=>(
            <ChatTypeBtn {...type} />
          ))
        }

      </div>

      <Divider orientation="horizontal" className="mt-2.5" />
    </div>
  );
}

export default ChatsType;
