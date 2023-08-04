import {
    IconButton,
    Tooltip,
    Icon,
    Text,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton
} from '@chakra-ui/react'
import { HiOutlinePencilSquare } from 'react-icons/hi2'

export default function(){
    return (
        <div className='py-2 px-4 flex justify-between gap-2.5 items-center hover:bg-slate-50 hover:cursor-pointer contact'>
            <div className='flex gap-2 items-center'> 
                <div>
                    <Popover placement='left'>
                    <PopoverTrigger>
                        <Avatar name='Rakhimov Diyor' size='md' /> 
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader><Text fontSize='sm' as='b'>User Info</Text></PopoverHeader>
                        <PopoverBody>
                            <div className='flex flex-col gap-1.5'>
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
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <div>
                        <Text fontSize='sm' as='b' className=''>Rakhimov Diyor</Text>
                    </div>
                    <div>
                        <Text fontSize='sm' color='grey'>online</Text>
                    </div>
                </div>
            </div>
            <div>
                <Tooltip label="Go to chat" bg='#0b2638'>
                    <IconButton
                    isRound={true}
                    variant='ghost'
                    colorScheme='facebook'
                    aria-label='Go to chat'
                    size="sm"
                    fontSize='18px'
                    icon={<Icon as={HiOutlinePencilSquare} />}
                    className='contact__action'
                    onFocus={e => e.preventDefault()}
                    />
                </Tooltip>
            </div>
        </div>
    )
}