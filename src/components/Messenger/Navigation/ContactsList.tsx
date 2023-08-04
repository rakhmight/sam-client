import {
    IconButton,
    Tooltip,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    useDisclosure,
    Text,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { MdOutlineContacts, MdClose, MdPersonSearch } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import Contact from './Contact'

export default function(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <div>
            <Tooltip label="Contacts list" bg='#0b2638' placement='right' closeDelay={50}>
                <IconButton
                isRound={true}
                variant='ghost'
                colorScheme='whiteAlpha'
                aria-label='Contacts'
                size="sm"
                fontSize='18px'
                icon={<Icon as={MdOutlineContacts} />}
                onClick={onOpen}
                onFocus={e => e.preventDefault()}
                />
            </Tooltip>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} size='md' isCentered>
            <ModalOverlay />
            <ModalContent className='flex flex-col gap-2.5'>
                <div>
                    <div className='flex gap-2.5 justify-between py-2 px-4'>
                        <div className='flex gap-0.5 items-center'>
                            <div>
                                <Icon as={MdPersonSearch} color='var(--main-color)' fontSize='18px' />
                            </div>
                            <div>
                                <Text fontSize='md' as='b'>Contacts</Text>
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
                
                <div className='flex flex-col'>
                    <div className='px-4'>
                        <InputGroup size='sm'>
                            <InputLeftElement pointerEvents='none'>
                                <Icon color='grey' as={BsSearch} />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Search' size='sm' />
                        </InputGroup>
                    </div>

                    <Divider className='mt-2.5' />
                    <div className='contacts__list'>

                        <Contact />
                            
                    </div>
                    <Divider className='mb-2.5' />

                </div>
            </ModalContent>
        </Modal>
        </>
    )
}