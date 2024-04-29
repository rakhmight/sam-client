import { FC } from 'react'
import { IconButton, Icon, Text, Badge } from '@chakra-ui/react'
import { ImFilePicture } from 'react-icons/im'
import { BsCheck2All } from 'react-icons/bs'

// import { BsCheck2, BsCheck2All } from 'react-icons/bs'
// import { ImFilePlay, ImFileMusic, ImFileEmpty, ImFilePicture } from 'react-icons/im'
import styles from './FileMessage.module.css'

interface FileMessageProps {
    
}

const FileMessage : FC<FileMessageProps> = () => {
    return(
        <div className={styles['msg-file-out']}> {/* msg-file-inc */}
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
                    <Text fontSize='small' as='b' className={`lim-txt ${styles["lim-txt-400"]}`}>Lorem ipsum.jpeg</Text>
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
                            <Icon as={BsCheck2All} fontSize='lg' color='blue.800' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileMessage