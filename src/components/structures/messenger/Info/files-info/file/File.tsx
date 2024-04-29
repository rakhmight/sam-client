import { FC } from 'react'
import { Text, IconButton, Icon, Badge } from '@chakra-ui/react'
import { ImFileEmpty } from 'react-icons/im'
// import { ImFilePlay, ImFileMusic, ImFileEmpty, ImFilePicture } from 'react-icons/im'

const File : FC = () => {
    return (
        <div className='flex flex-row items-center gap-2.5 w-full px-4'>
            <div>
                <IconButton
                isRound={true}
                variant='solid'
                colorScheme='facebook'
                aria-label='File'
                fontSize='20px'
                icon={<Icon as={ImFileEmpty} />}
                size='md'
                />
            </div>
            <div className='w-full'>
                <div className='flex items-center gap-1'>
                    <Badge colorScheme='facebook'>PDF</Badge>
                    <Text fontSize='small' as='b' className='lim-txt w-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.pdf</Text>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <div>
                        <Text fontSize='small' color='grey'>12.00 MB</Text>
                    </div>
                    <div>
                        <Text color='grey' fontSize='small'>12.12.2023 18:00</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default File