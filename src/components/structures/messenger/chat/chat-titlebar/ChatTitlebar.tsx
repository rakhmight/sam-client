import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import ContactMenu from './contact-menu/ContactMenu'


const ChatTitlebar : FC = () => {
    return (
        <div className="chat__titlebar bg-slate-100 flex flex-row gap-2.5 items-center px-2.5 justify-between">
        <div className="flex flex-col">
           <Text fontSize='sm' as='b'>Rakhimov Diyor</Text>
           <Text fontSize='small' color='grey'>online</Text>
        </div>
        
        <ContactMenu />
     </div>
    )
}

export default ChatTitlebar