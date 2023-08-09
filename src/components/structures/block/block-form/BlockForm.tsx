import { FC } from 'react'
import {
    Button,
    Input
} from "@chakra-ui/react"
import FormTitle from './form-title/FormTitle'

const BlockForm : FC = () => {
    return(
        <div className={`w-[280px] flex flex-col items-center gap-7`}>
               <FormTitle />

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
    )
}

export default BlockForm