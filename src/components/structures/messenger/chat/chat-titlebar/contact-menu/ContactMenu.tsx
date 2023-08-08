import { FC } from 'react'
import {
   Menu,
   MenuButton,
   MenuList,
   Icon,
   IconButton
 } from '@chakra-ui/react'
import ContactMenuBtn from '@/components/ui/buttons/contact-menu-btn/ContactMenuBtn'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsFillTelephoneFill, BsCameraVideoFill } from 'react-icons/bs'
import { BiFolderPlus } from 'react-icons/bi'

const ContactMenu : FC = () => {
    return(
        <Menu>
        <MenuButton
           as={IconButton}
           isRound={true}
           variant='ghost'
           colorScheme='facebook'
           aria-label='Contacts'
           size="sm"
           fontSize='20px'
           icon={<Icon as={BiDotsVerticalRounded} />}
        />
        <MenuList p={0} minW="0" w={'150px'} fontSize={'14px'}>
            <ContactMenuBtn icon={<BsFillTelephoneFill color='var(--special-color)' />} txt="Call" />
            <ContactMenuBtn icon={<BsCameraVideoFill color='var(--special-color)' />} txt="Video call" />
            <ContactMenuBtn icon={<BiFolderPlus color='var(--special-color)' />} txt="Add to favorite" />
        </MenuList>
        </Menu>
    )
}

export default ContactMenu