import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsFillTelephoneFill, BsCameraVideoFill } from 'react-icons/bs'
import {
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   useToast,
   Text,
   Icon,
   IconButton
 } from '@chakra-ui/react'

export default function(){
   const toast = useToast()
   const id ='will-come'

    return (
        <div className="chat__titlebar bg-slate-100 flex flex-row gap-2.5 items-center px-2.5 justify-between">
        <div className="flex flex-col">
           <Text fontSize='sm' as='b'>Rakhimov Diyor</Text>
           <Text fontSize='small' color='grey'>online</Text>
        </div>
        <div>
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
               <MenuItem
               icon={<BsFillTelephoneFill color='var(--main-color)' />}
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
                  Call
               </MenuItem>
               <MenuItem
               icon={<BsCameraVideoFill color='var(--main-color)' />}
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
                  Video call
               </MenuItem>
            </MenuList>
            </Menu>
        </div>
     </div>
    )
}