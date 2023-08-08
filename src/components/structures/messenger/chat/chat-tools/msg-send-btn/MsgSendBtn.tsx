import { Icon } from '@chakra-ui/react'
import { FC } from 'react'
import { IoSendSharp } from 'react-icons/io5'

const MsgSendBtn : FC = () => {
    return(
        <Icon as={IoSendSharp} color='var(--special-color)' size='md' w={6} h={6} className="hover:cursor-pointer" />
    )
}

export default MsgSendBtn