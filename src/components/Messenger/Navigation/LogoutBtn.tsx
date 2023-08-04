import {
    IconButton,
    Tooltip,
    Icon,
    useDisclosure,
    Text,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    Button
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import { IoWarningOutline } from 'react-icons/io5'
import { ImExit } from 'react-icons/im'

export default function(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (        
        <>
        <Tooltip label="Log out" bg='#0b2638' placement='right' closeDelay={50}>                
            <IconButton
            isRound={true}
            variant='ghost'
            colorScheme='whiteAlpha'
            aria-label='Exit'
            size="sm"
            fontSize='18px'
            icon={<Icon as={ImExit} />}
            onClick={onOpen}
            onFocus={e => e.preventDefault()}
            />
        </Tooltip>

        <Modal isOpen={isOpen} onClose={onClose} size='md' isCentered>
            <ModalOverlay />
            <ModalContent className='flex flex-col'>
                <div>
                    <div className='flex gap-2.5 justify-between py-2 px-4'>
                        <div className='flex gap-1.5 items-center'>
                            <div>
                                <Icon as={ImExit} color='var(--red-color)' fontSize='18px' />
                            </div>
                            <div>
                                <Text fontSize='md' as='b' color='var(--red-color)'>Do you want to log out?</Text>
                            </div>
                        </div>
                        <div>
                            <IconButton
                            isRound={true}
                            variant='ghost'
                            colorScheme='red'
                            aria-label='Contacts'
                            size="sm"
                            fontSize='18px'
                            icon={<Icon as={MdClose} />}
                            onClick={onClose}
                            />
                        </div>
                    </div>

                    <Divider borderTop='4px solid' color='#e2e8f0' />
                </div>
                
                <div className='py-2.5 mt-4 flex flex-col gap-1.5 items-center'>
                    <div>
                        <Icon as={IoWarningOutline} fontSize='4xl' color='var(--main-color)'></Icon>
                    </div>
                    <div className='w-3/4'>
                        <Text className='text-center' fontSize='sm'><b>Warning!</b> If you log out of your account, your data will be erased from this device</Text>
                    </div>
                    <div className='mt-6'>
                        <Button colorScheme='red' variant='outline' size='sm'>
                            Log out
                        </Button>
                    </div>
                </div>
            </ModalContent>
        </Modal>
        </>
    )
}