import { useDisclosure } from '@chakra-ui/react'
import { ImExit } from 'react-icons/im'
import NavBtn from '@/components/ui/buttons/nav-btn/NavBtn'
import LogoutModal from './logout-modal/LogoutModal'

function LogoutBtn(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (        
        <>
        <NavBtn
        tLabel="Log out"
        aLabel="Exit"
        fs="18px"
        icon={ImExit}
        callback={onOpen}
        />

        <LogoutModal state={isOpen} handler={onClose} />
        </>
    )
}

export default LogoutBtn