import { IconButton, useToast } from '@chakra-ui/react'
import { FC } from 'react'
import { UserActionBtnProps } from './types'

const UserActionBtn : FC<UserActionBtnProps> = ({ icon, fs, aLabel }) => {
    const toast = useToast()
    const id ='will-come'

    return(
        <IconButton
        size='sm'
        variant='outline'
        colorScheme='facebook'
        aria-label={aLabel}
        fontSize={fs}
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
        />
    )
}

export default UserActionBtn