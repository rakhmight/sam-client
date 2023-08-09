import { FC, useState } from 'react'
import {
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Icon,
    Button,
    Text
} from '@chakra-ui/react'
import FormTitle from './form-title/FormTitle'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import styles from './AuthForm.module.css'

const AuthForm : FC = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return(
        <div className={`${styles["auth-form"]} w-[480px] rounded-[4px] px-6 py-5 bg-slate-100 flex flex-col items-center gap-5`}>
            <FormTitle />

            <div className='w-full flex flex-col gap-2.5 mt-3'>
                <Input
                placeholder='Enter login'
                _placeholder={{ opacity: 0.6, color: 'var(--special-color)' }}
                size='sm'
                variant='flushed'
                colorScheme='facebook'
                errorBorderColor='var(--red-color)'
                />

                <div className='flex flex-col items-end'>
                    <InputGroup size='md'>
                    <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    _placeholder={{ opacity: 0.6, color: 'var(--special-color)' }}
                    size='sm'
                    variant='flushed'
                    colorScheme='facebook'
                    errorBorderColor='var(--red-color)'
                    />
                    <InputRightElement width='4.5rem'>                        
                        <IconButton
                        isRound={true}
                        variant='ghost'
                        colorScheme='whiteAlpha'
                        aria-label='Exit'
                        size="sm"
                        fontSize='18px'
                        icon={show ? <Icon as={BsEyeSlashFill} color='var(--special-color)' /> : <Icon as={BsEyeFill} color='var(--special-color)' />}
                        onClick={handleClick}
                        />
                    </InputRightElement>
                    </InputGroup>

                    <Text fontSize='smaller' color='grey' className='mt-1 hover:cursor-pointer hover:underline'>Forgot your password?</Text>
                </div>
            </div>

            <div className='mt-1.5'>
                <Button
                colorScheme='blackAlpha'
                size='sm'
                width='200px'
                height='28px'
                variant='outline'
                color='var(--special-color)'
                >Enter</Button>
            </div>
        </div>
    )
}

export default AuthForm