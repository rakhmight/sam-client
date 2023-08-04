import {
   Avatar,
   Text,
   Divider,
   Icon,
   IconButton,
   useToast 
} from '@chakra-ui/react'
import { LiaInfoCircleSolid } from 'react-icons/lia'
import { MdPhone, MdOutlineVideocam, MdPlaylistAdd } from 'react-icons/md'
import { BsLightningCharge } from 'react-icons/bs'
import { ImFilePlay, ImFileMusic, ImFileEmpty, ImFilePicture } from 'react-icons/im'

export default function Info(){
   const toast = useToast()
   const id ='will-come'

    return (
       <div className="h-full bg-slate-100 py-2.5 flex flex-col items-start gap-3">
            <div className='title h-9 flex items-center px-4'>
               <Text fontSize='md' as='b' color='var(--main-color)'>User Info</Text>
            </div>

            <div className="main-info flex items-center gap-3 pt-2 pb-2 px-4">
                  <div>
                     <Avatar size='lg' name='Rakhimov Diyor'></Avatar>
                  </div>
                  <div>
                     <div className='lim-txt lim-txt-160'>
                        <Text fontSize='16px' as='b'>Rakhimov Diyor</Text>
                     </div>
                     <div>
                        <Text fontSize='sm' color='grey'>online</Text>
                     </div>
                  </div>
            </div>
            
            <Divider orientation='horizontal' borderTop='8px solid' color='#c4d0dfcf'/>
            
            <div className="bio w-full px-4 flex flex-row gap-5">
               <div>
                  <Icon as={LiaInfoCircleSolid} fontSize='24px' color='var(--special-color)' />
               </div>

               <div className='flex flex-col gap-3'>
                  <div>
                     <div><Text fontSize='sm'>Some department</Text></div>
                     <div><Text fontSize='sm' color='grey'>Department</Text></div>
                  </div>
                  <div>
                     <div><Text fontSize='sm'>Some position</Text></div>
                     <div><Text fontSize='sm' color='grey'>Position</Text></div>
                  </div>
                  <div>
                     <div><Text fontSize='sm'>+998 99 999 99 99</Text></div>
                     <div><Text fontSize='sm' color='grey'>Mobile</Text></div>
                  </div>
               </div>
            </div>
            
            <Divider orientation='horizontal' borderTop='8px solid' color='#c4d0dfcf'/>
            
            <div className="actions px-4 w-full flex flex-row gap-5 items-center">
               <div>
                  <Icon as={BsLightningCharge} fontSize='20px' color='var(--special-color)' />
               </div>

               <div className='flex gap-2.5'>
                  <div>
                     <IconButton
                     size='sm'
                     variant='outline'
                     colorScheme='facebook'
                     aria-label='Call Sage'
                     fontSize='18px'
                     icon={<MdPhone />}
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
                     size='sm'
                     variant='outline'
                     colorScheme='facebook'
                     aria-label='Call Sage'
                     fontSize='22px'
                     icon={<MdOutlineVideocam />}
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
                     size='sm'
                     variant='outline'
                     colorScheme='facebook'
                     aria-label='Call Sage'
                     fontSize='18px'
                     icon={<MdPlaylistAdd />}
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
            </div>
            
            <Divider orientation='horizontal' borderTop='8px solid' color='#c4d0dfcf'/>

            <div className="media w-full">
               <div className='w-full flex flex-row gap-5 items-center px-4 py-1.5 hover:bg-slate-200 hover:cursor-pointer'>
                  <div><Icon as={ImFileEmpty} fontSize='18px' color='var(--special-color)' /></div>
                  <div><Text fontSize='sm'>0 files</Text></div>
               </div>
               <div className='w-full flex flex-row gap-5 items-center px-4 py-1.5 hover:bg-slate-200 hover:cursor-pointer'>
                  <div><Icon as={ImFilePicture} fontSize='18px' color='var(--special-color)' /></div>
                  <div><Text fontSize='sm'>0 images</Text></div>
               </div>
               <div className='w-full flex flex-row gap-5 items-center px-4 py-1.5 hover:bg-slate-200 hover:cursor-pointer'>
                  <div><Icon as={ImFilePlay} fontSize='18px' color='var(--special-color)' /></div>
                  <div><Text fontSize='sm'>0 videos</Text></div>
               </div>
               <div className='w-full flex flex-row gap-5 items-center px-4 py-1.5 hover:bg-slate-200 hover:cursor-pointer'>
                  <div><Icon as={ImFileMusic} fontSize='18px' color='var(--special-color)' /></div>
                  <div><Text fontSize='sm'>0 audio files</Text></div>
               </div>
            </div>
       </div>
    )
   }