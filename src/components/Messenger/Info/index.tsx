import UserInfo from "./UserInfo"
import Files from "./Files"
import InfoTitle from "./InfoTitle"
import useStore from "../../../hooks/useStore"

export default function Info(){
   const infoPanel = useStore((state:any)=>state.infoPanel)

    return (
      <div className="h-full bg-slate-100 flex flex-col items-start gap-3">
         
         <InfoTitle />
         
         {(infoPanel.mode=='user-info' && (
            <UserInfo />
         ))}
         {(infoPanel.mode=='files' && (
            <Files />
         ))}
      </div>
    )
   }