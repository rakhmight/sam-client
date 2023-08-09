import { FC } from 'react'
import { Icon, Text } from '@chakra-ui/react'
import useStore, { MessengerState } from '@/hooks/useStore'
import { FileTypeBtnProps, MediaBtnParams } from './type'

const FileTypeBtn : FC<FileTypeBtnProps> = ({ icon, count, title, panelData }) => {
    const changeInfoPanel = useStore((state:MessengerState)=>state.changeInfoPanel)

    const handleInfoPanel = (params: MediaBtnParams)=>{
        changeInfoPanel({ mode: 'files', ...params })
    }

    return(
        <div className='w-full flex flex-row gap-5 items-center px-4 py-1.5 hover:bg-slate-200 hover:cursor-pointer' onClick={()=> handleInfoPanel(panelData) }>
            <div><Icon as={icon} fontSize='18px' color='var(--special-color)' /></div>
            <div><Text fontSize='sm'>{count} {title}</Text></div>
        </div> 
    )
}

export default FileTypeBtn