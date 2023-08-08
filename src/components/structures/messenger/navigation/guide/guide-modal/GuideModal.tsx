import { FC } from 'react'
import {
    IconButton,
    Icon,
    Text,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import { BsBookHalf } from 'react-icons/bs'
import { NavigationModalProps } from '../../@types'

const GuideModal : FC<NavigationModalProps> = ({ state, handler }) => {
    return (
        <Modal isOpen={state} onClose={handler} size='lg' isCentered>
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
                            onClick={handler}
                            />
                        </div>
                    </div>

                    <Divider borderTop='4px solid' color='#e2e8f0' />
                </div>
                
                <div>

                </div>
            </ModalContent>
        </Modal>
    )
}

export default GuideModal