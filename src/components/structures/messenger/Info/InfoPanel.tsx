import { FC } from 'react'
import UserInfo from "./user-info/UserInfo"
import Files from "./files-info/FilesInfo"
import InfoTitle from "./info-panel-title/InfoPanelTitle"
import useStore, { MessengerState } from "@/hooks/useStore"

const InfoPanel : FC = () => {
   const infoPanel = useStore((state:MessengerState)=>state.infoPanel)

    return (
      <div className="h-full bg-slate-100 flex flex-col items-start gap-3">
         
         <InfoTitle />
         
         {
            infoPanel.mode=='contact' && (
               <UserInfo />
            )
         }

         {
            infoPanel.mode=='files' && (
               <Files />
            )
         }
      </div>
    )
}

export default InfoPanel