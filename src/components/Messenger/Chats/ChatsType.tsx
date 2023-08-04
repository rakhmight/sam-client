import { Icon, useToast, Divider, IconButton } from '@chakra-ui/react'
import { BsChatDots, BsMegaphone, BsStar } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'

export default function ChatsTypeCom(){
   const toast = useToast()
   const id ='will-come'
   
    return (
      <div className='w-full'>
         <div className='px-2.5 pt-2.5 w-full flex flex-row justify-between'>
            <div>
               <IconButton
               isRound={true}
               variant='outline'
               colorScheme='facebook'
               aria-label='Chats'
               size="md"
               fontSize='24px'
               icon={<Icon as={BsChatDots} />}
               />
            </div>
            <div>
               <IconButton
               isRound={true}
               variant='outline'
               colorScheme='facebook'
               aria-label='Channels'
               size="md"
               fontSize='22px'
               icon={<Icon as={BsMegaphone} />}
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
            </div>
            <div>
               <IconButton
               isRound={true}
               variant='outline'
               colorScheme='facebook'
               aria-label='Groups'
               size="md"
               fontSize='22px'
               icon={<Icon as={HiOutlineUserGroup} />}
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
            </div>
            <div>
               <IconButton
               isRound={true}
               variant='outline'
               colorScheme='facebook'
               aria-label='Favorite'
               size="md"
               fontSize='22px'
               icon={<Icon as={BsStar} />}
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
            </div>
         </div>

         <Divider orientation='horizontal' className='mt-2.5' />
      </div>
    )
}