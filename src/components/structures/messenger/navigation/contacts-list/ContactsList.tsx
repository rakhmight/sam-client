import { FC } from 'react'
import NavBtn from '@/components/ui/buttons/nav-btn/NavBtn'
import ContactListModal from './contact-list-modal/ContactListModal'
import { useDisclosure } from '@chakra-ui/react'
import { MdOutlineContacts } from 'react-icons/md'

const ContactsList : FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <NavBtn
                tLabel="Contacts list"
                aLabel="Contacts"
                fs="18px"
                icon={MdOutlineContacts}
                callback={onOpen}
            />

            <ContactListModal state={isOpen} handler={onClose} />

        </>
    )
}

export default ContactsList