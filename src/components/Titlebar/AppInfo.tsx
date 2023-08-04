import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function(){
    return (
        <div className='px-1.5 flex flex-row gap-1'>
            <div className='flex items-center'>
                <Image src={'./src/assets/media/min-logo.png'} alt='SA Messenger' boxSize='14px' />
            </div>
            <div>
                <Text className='pt-1' fontSize='sm' color='#bdbdbd'>Smart Academy messenger</Text>
            </div>
        </div>
    )
}