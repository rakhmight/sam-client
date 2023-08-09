import { FC } from 'react'
import {
    Text,
    Button,
    Input,
    Img
} from "@chakra-ui/react"
import styles from './Block.module.css'

const Block : FC = () => {
    return (
        <div className={`${styles.block} bg-slate-300`}>

            <div className={`${styles.block__form} flex flex-col items-center gap-7`}>
                <div className='flex items-center gap-2.5'>
                    <Img src='./media/logo-256.png' boxSize='54px'></Img>
                    <div>
                        <Text as='b' fontSize='md'>Enter passcode</Text>
                        <Text fontSize='sm' color='grey'>Smart Academy messenger</Text>
                    </div>
                </div>

                <div className="w-full mt-2">
                    <Input
                    placeholder='Access code'
                    _placeholder={{ opacity: 0.6, color: 'var(--special-color)' }}
                    size='sm'
                    variant='flushed'
                    colorScheme='facebook'
                    errorBorderColor='var(--red-color)'
                    type='password'
                    borderColor='var(--special-color)'
                    focusBorderColor='var(--special-color)'
                    />
                </div>

                <div className="w-full">
                    <Button
                    colorScheme='blackAlpha'
                    size='sm'
                    w='full'
                    height='28px'
                    variant='outline'
                    color='var(--special-color)'
                    >Confirm</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Block