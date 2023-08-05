import { Text, IconButton, Icon } from "@chakra-ui/react"
import useStore from "../../../hooks/useStore"
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

export default function(){
    const infoPanel = useStore((state:any)=>state.infoPanel)
    const changeInfoPanel = useStore((state:any)=>state.changeInfoPanel)

    const handleBackBtn = ()=>{
        if(infoPanel.mode=='files'){
            changeInfoPanel({ mode: 'user-info', des: null })
        }
    }

    return (
        <div className='pt-2.5 title w-full h-9 flex items-center px-4 justify-between'>
            <div>
                {/* USER INFO */}
                {
                    infoPanel.mode=='user-info' && (
                        <Text fontSize='md' as='b' color='var(--main-color)'>User Info</Text>
                    )
                }

                {/* FILES */}
                {
                    infoPanel.mode=='files' && infoPanel.des=='files' && (
                        <Text fontSize='md' as='b' color='var(--main-color)'>Files</Text>
                    )
                }

                {
                    infoPanel.mode=='files' && infoPanel.des=='images' && (
                        <Text fontSize='md' as='b' color='var(--main-color)'>Images</Text>
                    )
                }

                {
                    infoPanel.mode=='files' && infoPanel.des=='videos' && (
                        <Text fontSize='md' as='b' color='var(--main-color)'>Videos</Text>
                    )
                }

                {
                    infoPanel.mode=='files' && infoPanel.des=='audios' && (
                        <Text fontSize='md' as='b' color='var(--main-color)'>Audio files</Text>
                    )
                }
            </div>

            <div>
                {
                    infoPanel.mode!='user-info' && (
                        <IconButton
                        isRound={true}
                        variant='ghost'
                        colorScheme='facebook'
                        aria-label='Contacts'
                        size="sm"
                        fontSize='18px'
                        icon={<Icon as={MdOutlineKeyboardBackspace} />}
                        onClick={handleBackBtn}
                        />
                    )
                }
            </div>
         </div>
    )
}