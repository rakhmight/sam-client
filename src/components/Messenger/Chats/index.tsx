import Search from './Search'
import ChatsType from './ChatsType'
import Correspondence from './Correspondence'

export default function Chats(){
    return (
       <div className="h-full bg-slate-100 pt-2.5 flex flex-col items-center">
            <Search/>
            <ChatsType/>

            <div className='w-full messenger__chats-window'>
               <Correspondence/>
            </div>
       </div>
    )
   }