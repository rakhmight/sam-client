import { FC } from 'react'
import { Img, Text } from '@chakra-ui/react'

const FormTitle : FC = () => {
    return(
        <div className='flex items-center gap-2.5'>
            <Img src='./media/logo-256.png' boxSize='54px'></Img>
            <div>
                <Text as='b' fontSize='md'>Enter passcode</Text>
                <Text fontSize='sm' color='grey'>Smart Academy messenger</Text>
            </div>
        </div>
    )
}

export default FormTitle