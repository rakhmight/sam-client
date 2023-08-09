import { FC } from 'react'
import { MenuItem, Text, useToast } from '@chakra-ui/react'
import { ContactMenuBtnProps } from './types'

const ContactMenuBtn : FC<ContactMenuBtnProps> = ({ icon, txt }) => {
    const toast = useToast()
    const id ='will-come'

    return(
        <MenuItem
        fontSize="18px"
        icon={icon}
        onClick={() =>{
           if (!toast.isActive(id)){
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
        >
           <Text fontSize='14px'>{ txt }</Text>
        </MenuItem>
    )
}

export default ContactMenuBtn