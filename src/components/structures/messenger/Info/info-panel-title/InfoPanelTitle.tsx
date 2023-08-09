import { FC } from 'react'
import { Text, IconButton, Icon } from "@chakra-ui/react"
import useStore, { MessengerState } from "@/hooks/useStore"
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const InfoPanelTitle : FC = () => {
    const infoPanel = useStore((state:MessengerState)=>state.infoPanel)
    const changeInfoPanel = useStore((state:MessengerState)=>state.changeInfoPanel)

    const handleBackBtn = ()=>{
        if(infoPanel.mode=='files'){
            changeInfoPanel({ mode: 'contact', des: null, title: 'User info' })
        }
    }

    return (
        <div className='pt-2.5 title w-full h-9 flex items-center px-4 justify-between'>
            <div>
                <Text fontSize='md' as='b' color='var(--main-color)'>{ infoPanel.title }</Text>
            </div>

            <div>
                {
                    infoPanel.mode!='contact' && (
                        <IconButton
                        isRound={true}
                        variant='ghost'
                        colorScheme='facebook'
                        aria-label='Back'
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

export default InfoPanelTitle