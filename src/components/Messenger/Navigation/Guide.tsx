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
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import { BsFillJournalBookmarkFill, BsBookHalf } from 'react-icons/bs'

export default function(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <div>
            <Tooltip label="Informative guide" bg='#0b2638' placement='right' closeDelay={50}>
                <IconButton
                isRound={true}
                variant='ghost'
                colorScheme='whiteAlpha'
                aria-label='Guide'
                size="sm"
                fontSize='16px'
                icon={<Icon as={BsFillJournalBookmarkFill} />}
                onClick={onOpen}
                onFocus={e => e.preventDefault()}
                />
            </Tooltip>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} size='lg' isCentered>
            <ModalOverlay />
            <ModalContent className='flex flex-col gap-2.5'>
                <div>
                    <div className='flex gap-2.5 justify-between py-2 px-4'>
                        <div className='flex gap-1.5 items-center'>
                            <div>
                                <Icon as={BsBookHalf} color='var(--main-color)' fontSize='16px' />
                            </div>
                            <div>
                                <Text fontSize='md' as='b'>Informative guide</Text>
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
                
                <div>

                </div>
            </ModalContent>
        </Modal>
        </>
    )
}