import { FC } from 'react'
import { Img, Text } from '@chakra-ui/react'

interface FormTitleProps {
    
}

const FormTitle : FC<FormTitleProps> = () => {
    return(
        <div className='flex items-center gap-2.5'>
            <Img src='./media/logo-256.png' boxSize='60px'></Img>
            <div>
                <Text as='b' fontSize='lg'>Enter your login details</Text>
                <Text fontSize='sm' color='grey'>Smart Academy messenger</Text>
            </div>
        </div>
    )
}

export default FormTitle