import ChatTypeBtn from "@/components/ui/buttons/chat-type-btn/ChatTypeBtn";
import { Divider } from "@chakra-ui/react";
import { BsChatDots, BsMegaphone, BsStar } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

function ChatsType() {
  return (
    <div className="w-full">
      <div className="px-2.5 pt-2.5 w-full flex flex-row justify-between">
        <ChatTypeBtn
          icon={BsChatDots}
          aLabel="Chats"
          fs="24px"
          avaible={false}
        />

        <ChatTypeBtn icon={BsMegaphone} aLabel="Channels" fs="22px" avaible />

        <ChatTypeBtn
          icon={HiOutlineUserGroup}
          aLabel="Groups"
          fs="22px"
          avaible
        />

        <ChatTypeBtn icon={BsStar} aLabel="Favorite" fs="22px" avaible />
      </div>

      <Divider orientation="horizontal" className="mt-2.5" />
    </div>
  );
}

export default ChatsType;
