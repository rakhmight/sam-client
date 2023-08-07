import { Text, IconButton, Icon, Badge } from '@chakra-ui/react'
import { BsCheck2, BsCheck2All } from 'react-icons/bs'
import { ImFilePlay, ImFileMusic, ImFileEmpty, ImFilePicture } from 'react-icons/im'

export default function(){
    return (
        <div className="chat__window h-full w-full px-2.5">

            <div className="empty-chat"></div>

            <div className="chat__window-wrap">
                
                <div className="msg-out-group">
                    <div className="msg-out">
                        <div>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nihil voluptatum</Text>
                        </div>
                        <div>
                            <Text color='grey' fontSize='small'>12:40</Text>
                        </div>
                        <div>
                            <Icon as={BsCheck2All} fontSize='lg' color='blue.800' />
                        </div>
                    </div>
                </div>

                <div className="msg-inc-group">
                    <div className="msg-inc">
                        <div>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                        </div>
                        <div>
                            <Text color='grey' fontSize='small'>12:40</Text>
                        </div>
                    </div>
                </div>            

                <div className="msgs-date">
                    <div className="m-date"><Text fontSize='small' color={'white'}>21.10.2021</Text></div>
                </div>
                
                <div className="msg-out-group">
                    <div className="msg-out">
                        <div>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                        </div>
                        <div>
                            <Text color='grey' fontSize='small'>12:40</Text>
                        </div>
                        <div>
                            <Icon as={BsCheck2All} fontSize='lg' color='blue.800' /> 
                        </div>
                    </div>

                    <div className='msg-file-out'>
                        <div>
                            <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='facebook'
                            aria-label='File'
                            fontSize='20px'
                            icon={<Icon as={ImFileEmpty} />}
                            size='lg'
                            />
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <Badge colorScheme='facebook'>PDF</Badge>
                                <Text fontSize='small' as='b' className='lim-txt lim-txt-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.pdf</Text>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <div>
                                    <Text fontSize='small' color='grey'>12.00 MB</Text>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <Text color='grey' fontSize='small'>12:40</Text>
                                    </div>
                                    <div>
                                        <Icon as={BsCheck2All} fontSize='lg' color='blue.800' className='mb-0.5' /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='msg-file-out'>
                        <div>
                            <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='facebook'
                            aria-label='File'
                            fontSize='20px'
                            icon={<Icon as={ImFilePlay} />}
                            size='lg'
                            />
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <Badge colorScheme='facebook'>MP4</Badge>
                                <Text fontSize='small' as='b' className='lim-txt lim-txt-400'>Lorem ipsum.mp4</Text>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <div>
                                    <Text fontSize='small' color='grey'>12.00 MB</Text>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <Text color='grey' fontSize='small'>12:40</Text>
                                    </div>
                                    <div>
                                        <Icon as={BsCheck2All} fontSize='lg' color='blue.800' className='mb-0.5' /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='msg-file-out'>
                        <div>
                            <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='facebook'
                            aria-label='File'
                            fontSize='20px'
                            icon={<Icon as={ImFileMusic} />}
                            size='lg'
                            />
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <Badge colorScheme='facebook'>MP3</Badge>
                                <Text fontSize='small' as='b' className='lim-txt lim-txt-400'>Lorem ipsum.mp3</Text>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <div>
                                    <Text fontSize='small' color='grey'>12.00 MB</Text>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <Text color='grey' fontSize='small'>12:40</Text>
                                    </div>
                                    <div>
                                        <Icon as={BsCheck2All} fontSize='lg' color='blue.800' className='mb-0.5' /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='msg-file-out'>
                        <div>
                            <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='facebook'
                            aria-label='File'
                            fontSize='20px'
                            icon={<Icon as={ImFilePicture} />}
                            size='lg'
                            />
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <Badge colorScheme='facebook'>JPEG</Badge>
                                <Text fontSize='small' as='b' className='lim-txt lim-txt-400'>Lorem ipsum.jpeg</Text>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <div>
                                    <Text fontSize='small' color='grey'>12.00 MB</Text>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <Text color='grey' fontSize='small'>12:40</Text>
                                    </div>
                                    <div>
                                        <Icon as={BsCheck2All} fontSize='lg' color='blue.800' className='mb-0.5' /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="msg-inc-group">

                    <div className='msg-file-inc'>
                        <div>
                            <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='facebook'
                            aria-label='File'
                            fontSize='20px'
                            icon={<Icon as={ImFilePicture} />}
                            size='lg'
                            />
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <Badge colorScheme='facebook'>JPEG</Badge>
                                <Text fontSize='small' as='b' className='lim-txt lim-txt-400'>Lorem ipsum.jpeg</Text>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <div>
                                    <Text fontSize='small' color='grey'>12.00 MB</Text>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <Text color='grey' fontSize='small'>12:40</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}