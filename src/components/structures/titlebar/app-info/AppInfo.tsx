import { FC } from 'react'
import { Text, Image } from '@chakra-ui/react'

const AppInfo : FC = () => {
    return (
        <div className='px-1.5 flex flex-row gap-1'>
            <div className='flex items-center'>
                <Image src='./media/min-logo.png' alt='SA Messenger' h='16px' w='12px' />
            </div>
            <div>
                <Text className='pt-1' fontSize='sm' color='#bdbdbd'>Smart Academy messenger</Text>
            </div>
        </div>
    )
}

export default AppInfo