import Search from "./search-by-chats/SearchByChats";
import ChatsType from "./chats-type/ChatsType";
import Correspondence from "./correspondence/Correspondence";

function Chats() {
  return (
    <div className="h-full bg-slate-100 pt-2.5 flex flex-col items-center">
      <Search />
      <ChatsType />

      <div className="w-full messenger__chats-window">
        <Correspondence />
      </div>
    </div>
  );
}

export default Chats;
