import { ChatTypeBtnProps } from './ChatTypeBtn.types'
import { FC } from 'react'
import { Icon, useToast, IconButton } from '@chakra-ui/react'


const ChatTypeBtn : FC<ChatTypeBtnProps> = ({ icon, aLabel, fs, available }) => {
    const toast = useToast()
    const id ='will-come'

    return (
        <IconButton
        isRound={true}
        variant='outline'
        colorScheme='facebook'
        aria-label={aLabel}
        size="md"
        fontSize={fs}
        icon={<Icon as={icon} />}
        onClick={() =>{
           if (!toast.isActive(id) && available){
              toast({
              description: `Will come in the next update`,
              status: 'info',
              isClosable: true,
              variant: 'left-accent',
              position: 'bottom-right',
              colorScheme: 'facebook',
              id
              })
           }
        }}
        />
    )
}

export default ChatTypeBtn